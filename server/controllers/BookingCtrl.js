const Book = require('../model/Booking')


// automatically exports createBooking
const createBooking = async(req, res) => {

    const { hotelName, startDate, endDate, CustomerName } = req.body;

    try 
    {
        const newBooking = new Book({
            hotelName,
            startDate,
            endDate,
            CustomerName
        });

        const booking = await newBooking.save();
        res.json(booking);
        
    } 
    catch (error)
    {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}; 

module.exports = {
    createBooking
}