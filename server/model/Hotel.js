const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
        unique:true,
    },
    hotelImage : {
        type: String,
        required: true,
    }
});

const hotel = mongoose.model("Hotel", HotelSchema)

module.exports = hotel;