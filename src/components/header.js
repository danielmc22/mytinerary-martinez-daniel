import React from 'react'
import "../styles/header.css"
import coverVideo from "../img/coverVideo.mp4"
import logoEnHeader from "../img/solo_logo.png";
import ImagenHeder from "../img/imagenHeader.png"


const Header = () => {
  return (
    <div className='video-container'>

      <video className='video' src={coverVideo} autoPlay loop muted> </video>
      
      <div className='containerHeader'>
        <img src={ImagenHeder} className="imagenHeader"/>

        <div className='txtMytinerary'>
            <h1 className='txtMy'>My</h1>
            <h1 className='txtTinerary'>Tinerary</h1>
        </div>

        <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
      
      </div>
      
      
    </div>
  )
}

export default Header
