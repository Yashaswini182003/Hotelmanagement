import React from 'react'
import './Rooms.css'

const Rooms = () => {
  return (
    <div className='container'>
      {/* bedroom 1 */}
        <div className="room-card">
            <img src="bedroom1.jpg" alt="Nerul Room"/>
            <div className="room-info">
                <h3 className='h3'>Supreme Dulexe room</h3>
                <br></br>
                <p className='p6'>$200 per night</p>
                <p className='p7'>24 hours air conditioning with free WiFi and room service</p>
                <br></br>
                <a href="#" className="book-btn">BOOK NOW</a>
                
                

              </div>
        </div>

        {/* bedroom 2 */}
        <div className="room-card">
            <img src="bedroom2.jpg" alt="Vashi Room"/>
            <div className="room-info">
               <h3 className='h3'>Dulexe room</h3>
                <br></br>
                <p className='p6'>$450 per night</p>
                <p className='p7'>24 hours air conditioning with free WiFi and room service</p>
                <br></br>
                <a href="#" className="book-btn">BOOK NOW</a>
                
            </div>
        </div>

        {/* bedroom 3 */}
        <div className="room-card">
            <img src="bedroom3.jpg" alt="Belapur Room"/>
            <div className="room-info">
                <h3 className='h3'>Luxury room</h3>
                <br></br>
                <p className='p6'>$190 per night</p>
                <p className='p7'>24 hours air conditioning with free WiFi and room service</p>
                <br></br>
                <a href="#" className="book-btn">BOOK NOW</a>
            </div>
        </div>

        {/* bedroom 4 */}
        <div className="room-card">
            <img src="bedroom4.jpg" alt="Belapur Room"/>
            <div className="room-info">
                <h3 className='h3'>Dulex room</h3>
                <br></br>
                <p className='p6'>$150 per night</p>
                <p className='p7'>24 hours air conditioning with free WiFi and room service</p>
                <br></br>
                <a href="#" className="book-btn">BOOK NOW</a>
            </div>
        </div>

   </div>
   
  )
}

export default Rooms
