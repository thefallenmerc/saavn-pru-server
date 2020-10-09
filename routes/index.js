const { default: Axios } = require('axios');
var express = require('express');
const endpoints = require('../config/endpoints');
const Helper = require('../helpers/helper');
var router = express.Router();

router.get('/search', async function (req, res, next) {

  const { query } = req.query;

  // get search response
  const response = (await Axios.get(endpoints.search_base_url + query)).data;

  // response.songs = await Promise.all(response.songs.data.map(song => {
  //   return Axios.get(endpoints.song_details_base_url + song.id)
  // }));
  const songs = [];

  for (const song of response.songs.data) {
    const songData = (await Axios.get(endpoints.song_details_base_url + song.id)).data;
    const formattedSong = Helper.formatSongDetail(songData[song.id]);
    if(formattedSong) {
      songs.push(formattedSong);
    }
  }

  return res.json(songs);

});

module.exports = router;
