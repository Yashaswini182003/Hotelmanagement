import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

        <nav>

       <Link to={'/'}> Home </Link>
       <Link to={'/aboutus'}> About Us </Link>
       <Link to={'/rooms'}> Rooms </Link>
       <Link to={'/restaurant'}> Restaurant </Link>
       <Link to={'/gallery'}> Gallery </Link>
       <Link to={'/bookingform'}> Booking Form </Link>
       <Link to={'/admin'}>Admin</Link>


        </nav>
      

    </div>
  )
}

export default Navbar
