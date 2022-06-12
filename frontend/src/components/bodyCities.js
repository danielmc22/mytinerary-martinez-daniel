import React from 'react'
import "../styles/bodyCities.css"
import ImgCoverHeader from "../img/ImgCoverHeader.jpg"
import PngTitulo from "../img/Travel-PNG.png"
import Cards from "../components/cards"



const BodyCities = () => {
  return (

  <div className='headerGlobal'>

      <div className='header-container'>    
        <img src={ImgCoverHeader} className="cover"/>
        <h2> Discover Your Next Destinations </h2>
      </div>


      <div className='div-2'> 
        <h2> Choose The Best Places For Your Next Trip </h2>
        <img src={PngTitulo}  alt="imagen-titulo-cards"></img>
      </div>
    
  </div>

  )
}


export default BodyCities