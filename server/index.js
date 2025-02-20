require('dotenv').config()
const express = require('express')

const cors = require('cors')
const RunServer = require('./database/Connection')
const Bookingrouter = require('./routes/BookingRoute')
const adminrouter = require('./routes/Admin')
const bodyParser = require('body-parser')
const hotelrouter = require('./routes/HotelRoute')
const path = require('path')


const app = express()
const port = 3000

RunServer()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

app.use('/api/bookings', Bookingrouter )
app.use('/api/admin', adminrouter )
app.use('/api/hotels',hotelrouter)


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})