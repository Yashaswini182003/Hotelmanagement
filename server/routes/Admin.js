const express = require('express');
const Book = require('../model/Booking');


const adminrouter = express.Router();


// @route GET/api/admin/bookings
// @desc GET all bookings

adminrouter.get('/bookings', async(req, res) => {
    try
    {
        const bookings = await Book.find();
        res.json(bookings)
    } 
    catch (error) 
    {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = adminrouter;