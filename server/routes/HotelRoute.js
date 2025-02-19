
const express = require('express');
const multer = require('multer');
const path = require('path');
const { getAllHotels, addHotel, deleteHotel } = require('../controllers/HotelCtrl');

const hotelrouter = express.Router();







// set up multer for file uploads

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', 'uploads'),
    // use absolute path
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()} ${path.extname(file.originalname)}`);
    }
});


const upload = multer ({
    storage,
    limits: {fileSize: 10000000},
    // limit filesize to 1MB

    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },

});

function checkFileType(file, cb)
{
    // allowed file types
    const filetypes = /jpeg|jpg|png/;
    // check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // using MIME type can be specify whether a file is an image, a video, a text document, etc.
    const mimetype = filetypes.test(file.mimetype);
    if(mimetype && extname)
    {
        return cb(null, true);

    }
    else
    {
        cb('Error: Image Only!');
    }
}

 hotelrouter.get('/',getAllHotels);
 hotelrouter.post('/', upload.single('hotelImage'), addHotel);
 hotelrouter.delete('/:id', deleteHotel);

 module.exports = hotelrouter;