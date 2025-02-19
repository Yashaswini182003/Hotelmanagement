import React from 'react'
import BookingForm from './pages/BookingForm'
import AboutUs from './pages/AboutUs'
import Rooms from './pages/Rooms'
import Restaurant from './pages/Restaurant'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'


const App = () => {
  return (
    <div>

      <Navbar></Navbar>
      
      {/* these path should be same as navbar */}
       <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/rooms' element={<Rooms/>}></Route>
      <Route path='/restaurant' element={<Restaurant/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/bookingform' element={<BookingForm/>}></Route>
      {/* In search bar we have to search like http://localhost:5173/admin */}
      <Route path='/admin' element={<Admin/>}></Route>
      

      </Routes> 



    
    
      


    </div>
  )
}

export default App
