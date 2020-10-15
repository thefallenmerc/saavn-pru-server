const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    songs: [{
        id: String,
        song: String,
        album: String,
        year: Number,
        singers: String,
        image: String,
        label: String,
        play_count: Number,
        "320kbps": Boolean,
        has_lyrics: Boolean,
        duration: Number,
        release_date: Date,
        media_url: String,
        image_500: String,
    }]
}, {
    timestamps: true,
    toObject: {
        transform: (obj, ret) => {
            delete ret.__v;
            ret.id = ret._id;
            delete ret._id;
            return ret;
        }
    }
});

const Playlist = mongoose.model("Playlist", Schema);

module.exports = Playlist;