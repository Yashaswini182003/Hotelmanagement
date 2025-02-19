import React, { useEffect, useState } from 'react'
import './BookingForm.css'
import axios from 'axios';


const BookingForm = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelName, setHotelName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [CustomerName, setCustomerName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/hotels')
      .then(response => setHotels(response.data))
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { hotelName, startDate, endDate, CustomerName };

    axios.post('http://localhost:3000/api/bookings', bookingData)
      .then(response => {
        alert('Booking successfull!');
        setHotelName('');
        setStartDate('');
        setEndDate('');
        setCustomerName('');
      })

      .catch(error => console.error('Error creating bookings:', error));
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    // months are 0 based, 09-

    const dd = String(today.getDate()).padStart(2, '0');
    // 02

    return `${yyyy}-${mm}-${dd}`
  };

  const todayDate = getTodayDate();

  return (
    <div className='bookingform'>

      <form onSubmit={handleSubmit}>
        <h1 className='h1'> Booking Form </h1>

        <label> Hotel Name </label>

        <select id='hotelName' value={hotelName} onChange={(e) => setHotelName(e.target.value)} required>

         <option value='' disabled> Select a hotel</option>
         {hotels.map((hotel, index) => (

          <option key={index} value={hotel.hotelName}> {hotel.hotelName} </option>

         ))}
          
        </select>

        <label htmlFor='startDate' > Start Date </label>
        <input type='date' id='startDate' value={startDate} min={todayDate} onChange={(e) => setStartDate(e.target.value)} required ></input>

        <label htmlFor='endDate'> End Date </label>
        <input type='date' id='endDate' value={endDate} min={startDate || todayDate} onChange={(e) => setEndDate(e.target.value)} required></input>

        <label htmlFor='customerName'> Customer Name </label>
        <input type='text' id='customerName' value={CustomerName} onChange={(e) => setCustomerName(e.target.value)} required ></input>

        <button type='submit' className='button'> Book Now</button>

      </form>

    </div>
  )
}

export default BookingForm
