import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className='gallery'>

      <h1 className='gallery-heading'>Explore Our Stunning <span>Room Gallery</span> </h1>

      <div className='bedroom'>

      <img src='gallery-11.jpg' alt='bed' width={500} height={400}></img>
      <img src='gallery-2.jpg' alt='bed' width={500} height={400}></img>
      <img src='gallery-11.jpg' alt='bed' width={500} height={400}></img>
      <img src='gallery-4.jpg' alt='bed' width={500} height={400}></img>
      <img src='gallery-5.jpg' alt='bed' width={500} height={400}></img>
      <img src='gallery-8.jpg' alt='bed' width={500} height={400}></img>

      </div>
      
    </div>
  )
}

export default Gallery
