const Resource = require('./resource');
const SongResource = require('./song-resource');

module.exports = class PlaylistResource extends Resource {

    format(resource) {
        return {
            name: resource.name,
            songs: new SongResource(resource.songs),
        };
    }

}