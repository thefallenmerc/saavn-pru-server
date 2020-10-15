const Resource = require('./resource');

module.exports = class SongResource extends Resource {

    format(resource) {



        return {
            id: resource.id,
            song: resource.song,
            album: resource.album,
            year: resource.year,
            singers: resource.singers,
            image: resource.image,
            label: resource.label,
            play_count: resource.play_count,
            "320kbps": resource["320kbps"],
            has_lyrics: resource.has_lyrics,
            duration: resource.duration,
            release_date: resource.release_date,
            media_url: resource.media_url,
            image_500: resource.image_500,
        };
    }

}