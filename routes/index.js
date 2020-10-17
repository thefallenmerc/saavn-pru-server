const { default: Axios } = require('axios');
var express = require('express');
const endpoints = require('../lib/endpoints');
const Helper = require('../helpers/helper');
var router = express.Router();

const { OAuth2Client } = require('google-auth-library');
const config = require('../lib/config');
const User = require('../models/user');
const client = new OAuth2Client(config.googleSignInClientId);
const jwt = require('jsonwebtoken');
const AuthMiddleware = require('../middlewares/authmiddleware');
const SongResource = require('../resources/song-resource');
const SyncController = require('../controllers/sync-controller');

router.get('/search', async function (req, res, next) {

  const { query } = req.query;

  // get search response for first page (20 results)
  const response = (await Axios.get(endpoints.search_base_url + query)).data;

  console.log(response.songs);

  const songs = [];

  for (const song of response.results) {
    const songData = (await Axios.get(endpoints.song_details_base_url + song.id)).data;
    const formattedSong = Helper.formatSongDetail(songData[song.id]);
    if (formattedSong) {
      songs.push(formattedSong);
    }
  }

  return res.json(new SongResource(songs));

});

// google auth
router.get('/google-signin', async function (req, res) {
  try {

    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: config.googleSignInClientId
    });

    const { email, name, picture } = ticket.getPayload();

    // check if in db
    let user = await User.findOne({
      email
    });

    // if not user, create the user
    if (!user) {
      user = await User.create({ email, name, picture });
    }

    user = user.toObject();

    // add token to user, so that it can be easily accessed on frontend
    user.token = await jwt.sign(user, process.env.APP_KEY);
    user.tokenId = token;

    // send back the user
    return res.json({ user });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ message: "Something went wrong!" });
  }
})

router.post('/sync-up', AuthMiddleware, SyncController.up);
router.get('/sync-down', AuthMiddleware, SyncController.down);

module.exports = router;
