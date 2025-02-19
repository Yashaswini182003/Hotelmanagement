import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Admin.css'

const Admin = () => {

    const [bookings, setBookings] = useState([]);
    const [hotelName, setHotelName] = useState('');
    const [hotelImage, setHotelImage] = useState(null);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetchBookings();
        fetchHotels();
    }, []);

    const fetchBookings = async () => {
       try 
       {

        const response = await axios.get('http://localhost:3000/api/admin/bookings');
        setBookings(response.data);

       }
        
       catch (error) 
       {
          console.error('Error fetching bookings:', error);
       }
    };

    const fetchHotels = async () => {
      try 
      {
          const response = await axios.get('http://localhost:3000/api/hotels');
          setHotels(response.data);
        
      } catch (error) 
      {
          console.log('Error fetching hotels:', error)
      }
    };

    const handleHotelSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('hotelName', hotelName)
      formData.append('hotelImage', hotelImage);

    

    try 
    {
      await axios.post('http://localhost:3000/api/hotels/', formData, {
        headers: {
          'Content-Type' : 'multipart/form-data',
        },
      });
      fetchHotels();
      setHotelName('');
      setHotelImage(null);
    } 
    catch (error) 
    {
       console.error('Error adding hotel:', error);
    }
  };

  const handleDelete = async (id) => {
   try
    {
       await axios.delete(`http://localhost:3000/api/hotels/${id}`)
       fetchHotels();
      
   } 
   catch (error) 
   {
      console.error('Error deleting hotel:', error.response ? error.response.data : error.message);
   }

  };

  return (
    <div className='container1'>
      <h1 className='heading11'>Booking Details </h1>
      <table className='table'>
        <thead>
          <tr>
            <th> Hotel Name </th>
            <th> Start Date </th>
            <th> End Date </th>
            <th> Customer Name </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
            <td> {booking.hotelName}</td>
            <td> {new  Date(booking.startDate). toLocaleDateString()}</td>
            <td> {new Date(booking.endDate).toLocaleDateString()}</td>
            <td>{booking.CustomerName}</td>


            </tr>

          ))}
        </tbody>
      </table>
      
      <br/>
      <br/>

      <h1 className='heading12'> Manage Hotels </h1>
      <form onSubmit={handleHotelSubmit} className='form'>
        <label htmlFor='hotelName'> Hotel Name: </label>
        <input
          type='text'
          id='hotelName'
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          required
        />


        <label htmlFor='hotelImage' > Hotel Image: </label>
        <input
          type='file'
          id='hotelImage'
          onChange={(e) => setHotelImage(e.target.files[0])}
          required
        />

        <button type='submit' className='button1'> Add Hotel </button>
        
      </form>

      
      <br/>
      <br/>

      <h2 className='heading13'> Hotel List </h2>

  <div className="card-container">
    {hotels.map((hotel) => (
    <div key={hotel._id} className="card">
      <img
        src={`http://localhost:3000/uploads/${hotel.hotelImage}`}
        alt={hotel.hotelName}
        className="hotel-image"
      />
      
      <div className="card-content">
        <h3 className="hotel-name">{hotel.hotelName}</h3>
        <button onClick={() => handleDelete(hotel._id)} className="button2"> Delete </button>

    </div>
  </div>
  ))}

  </div>

    </div>
  );
};

export default Admin
