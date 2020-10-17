const { default: Axios } = require('axios');
var express = require('express');
var router = express.Router();

const SocketIO = require('socket.io');
const SocketClient = require('socket.io-client');
const Helper = require('../helpers/helper');
const endpoints = require('./endpoints');
const { v4: uuid } = require("uuid");
const SongResource = require('../resources/song-resource');

let io = null;

// will have connected socket client
// we will send request to them
let client = null;

// list of queued request
const queuedRequests = {};


router.get('/search', function (req, res) {
  const { query } = req.query;
  // create a request
  const reqid = uuid();
  // emit for search
  io.emit('search', { query, reqid });
  // queeu the request
  queuedRequests[reqid] = null;

  let loadTime = 0;
  // check until we get the queuedRequests[reqid] as not null
  const responseCheckerListner = setInterval(() => {
    // if loadTime is more than 20sec (20000)
    if (loadTime > 30000) {
      res.json({ message: "Request timeout!" });
      delete queuedRequests[reqid];
      clearInterval(responseCheckerListner);
      return;
    }
    // else wait until we get result
    if (queuedRequests[reqid] !== null && Array.isArray(queuedRequests[reqid])) {
      // if we have data
      res.json(queuedRequests[reqid]);
      delete queuedRequests[reqid];
      clearInterval(responseCheckerListner);
      return;
    }
    loadTime += 100;
  }, 100)
  // loop and wait for the result
});

router.get('/', function (req, res) {
  const socket = SocketClient.connect(process.env.SOCKET, {
    secure: true,
    rejectUnauthorized: false,
  });

  // check connection
  socket.on('connect', _ => {
    console.log("Connected to server!");
  });

  // check for search
  socket.on('search', async data => {
    const { query, reqid } = data;

    console.log("Somebody asked for it", { query, reqid });

    // get search response for first page (20 results)
    const response = (await Axios.get(endpoints.search_base_url + query)).data;

    const songs = [];

    // format the data
    for (const song of response.results) {
      const songData = (await Axios.get(endpoints.song_details_base_url + song.id)).data;
      const formattedSong = Helper.formatSongDetail(songData[song.id]);
      if (formattedSong) {
        songs.push(formattedSong);
      }
    }

    console.log('sending result result', {
      query,
      songs: songs.length,
      reqid
    });

    // emit the results
    socket.emit('result', {
      query,
      songs: new SongResource(songs),
      reqid
    });

  });
  return res.send("Connected to server!");
})

module.exports = (server, app) => {
  // at the time of initialization the socket server will be created
  // after which we can just make requests to it
  // create socket
  io = SocketIO(server);
  // This will be the server running
  // Listen for events
  console.log("Listening for connections!");
  io.on('connection', onConnection);
  // define routes
  app.use('/socket', router);
};

function onConnection(socket) {
  console.log(socket.id + " connected!");
  // set the client
  if (!client) {
    client = socket;
  }
  socket.on('disconnect', () => {
    client = null;
    console.log(socket.id + " disconnected from server!");
  });
  socket.on('result', onResult);
}

function onResult({
  query,
  songs,
  reqid
}) {
  // we have the result,
  // check if request exists
  if (queuedRequests.hasOwnProperty(reqid)) {
    // lets fullfull it
    queuedRequests[reqid] = songs;
  }
}
