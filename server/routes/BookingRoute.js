const express = require('express');
const { createBooking } = require('../controllers/BookingCtrl');


const Bookingrouter = express.Router();

// get => fetch
// post => adding/create
// put => update
// delete => delete

Bookingrouter.post('/', createBooking)

module.exports = Bookingrouter;