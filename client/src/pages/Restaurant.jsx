import React from 'react'
import './Restaurant.css'

const Restaurant = () => {
  return (
    <div className='restaurant'>

      {/* <h1> Welcome to our amazing Restaurants </h1> */}
      <br></br>
      <img src='restaurant - 3.jpg' alt='image' className='image1'></img>
      <img src='restaurant - 2.jpg' alt='image' className='image2'></img>
      <img src='restaurant - 1.jpg' alt='image' className='image3'></img>

       <h1 className='h11'> Meet, Eat and Enjoy The <span>True Taste </span> </h1> 
       {/* <img src='utensils-solid.svg' alt='img' className='cutlery' width={50} height={50}></img> */}
       <p className='para11'> Enjoy a sophisticated ambiance with stylish interiors, warm lighting, and impeccable service that ensures a memorable dining experience. Start your day with a lavish breakfast, savor a delightful lunch, or unwind with a gourmet dinner complemented by a selection of premium beverages.</p>
       <p className='para12'>At <span className='Sp'> Sp</span><span className='edo'>edo</span>, we believe that great food is the heart of a perfect stay. Join us for an unforgettable culinary journey!</p>

      
    </div>
  )
}

export default Restaurant
