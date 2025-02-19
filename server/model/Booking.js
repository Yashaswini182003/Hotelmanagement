const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    hotelName : {
        type: String,
        required: true,
    },

    startDate : {
        type: Date,
        required: true
    },

    endDate : {
        type : Date,
        required : true
    },

    CustomerName : {
        type : String,
        required : true
    }
});

const Book = mongoose.model("Booking", BookingSchema)

module.exports = Book;