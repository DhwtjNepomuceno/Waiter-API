const multer = require('multer');
const { v4: uuid } = require('uuid');//imports UUID to save file image names as an unique ID.
const storage = multer.diskStorage({ //configurating where and how archives will be saved.
    destination: (req, file, cb) => {//"uploads/" must exist, or multer crashes.
        cb(null, 'uploads/');//null = no error, uploads = destination.
    },
    filename: (req, file, cb) => {//name that archive will receive when saved with UUID. Gets the archive extension, like "jpg".
        const ext = file.originalname.split('.').pop();
        const filename = `${uuid()}.${ext}`;
        cb(null, filename);
    }
});

const upload = multer({ storage });

module.exports = upload;