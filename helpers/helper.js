const crypto = require('crypto');

const Helper = {
    formatSongDetail: (songData) => {
        let media_url = songData.media_preview_url;
        if (media_url) {
            media_url = media_url.replace('preview', 'aac');
        } else {
            // FIXME
            return false;
            media_url = Helper.decode(songData.encrypted_media_url)
        }
        if (songData['320kbps']) {
            media_url = media_url.replace("_96_p.mp4", "_320.mp4");
        } else {
            media_url = media_url.replace("_96_p.mp4", "_160.mp4");
        }
        songData.media_url = media_url;

        songData.image_500 = songData.image.replace('150x150', '500x500');

        return songData;
    },

    decode: data => {
        // TODO Skip for now
        const alogrithm = 'des-ecb';
        const password = "38346591";
        const key = crypto.scryptSync(password, 'GFG', 24);

        var iv = crypto.randomBytes(8)
        ivstring = iv.toString('hex');
        const decipher = crypto.createDecipheriv(alogrithm, key, iv);
        let decrypted = '';

        decipher.on('readable', () => {
            let chunk;
            while (null !== (chunk = decipher.read())) {
                decrypted += chunk.toString('utf8');
            }
        });
        // Handling end event 
        decipher.on('end', () => {
            console.log(decrypted);
        }); 

        decipher.write(data, 'base64');
        decipher.end();

        return decrypted;
    }
}

module.exports = Helper;