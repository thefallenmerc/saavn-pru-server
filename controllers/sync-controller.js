const Playlist = require("../models/playlist");
const PlaylistResource = require("../resources/playlist-resource");
const SongResource = require("../resources/song-resource");

class SyncController {
    // Sync songs from app to our server
    static async up(req, res) {

        const { playlists } = req.body;

        // remove old playlists
        await Playlist.deleteMany({ user: req.user._id });

        // traverse all the playlists and save them
        for (const playlist in playlists) {
            const songs = playlists[playlist];
            await Playlist.create({
                name: playlist,
                songs,
                user: req.user._id
            });
        }

        return res.json({ playlists: new PlaylistResource(await Playlist.find({ user: req.user._id })) });
    }

    // Sync songs from our server to app
    static async down(req, res) {
        const playlistsList = await Playlist.find({ user: req.user._id });
        const playlists = {
            "Recent": [], // Adding these by default
            "Favorite": [] // Adding these by default
        };

        for (const playlist of playlistsList) {
            playlists[playlist.name] = new SongResource(playlist.songs);
        }

        return res.json({ playlists });
    }
}

module.exports = SyncController;