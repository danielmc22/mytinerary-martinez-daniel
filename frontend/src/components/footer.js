import React from 'react'
import "../styles/footer.css"
import ImagenHeder from "../img/imagenHeader.png"
import FondoFooter from "../img/fondoHeader.jpg"
import { Link as LinkRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (

    <div className='globalFooter'>
      <img className='fondoFooter' src={FondoFooter} />

      <div className='footerContainer'>

        <div className='primerElemento'>
          <img src={ImagenHeder} />
          <p>MyTinerary 2022</p>
        </div>

        <div className='socialMedia'>
          <h3>Social Media:</h3>
          <div className='iconsMedia'>
            <FontAwesomeIcon className='iconoMedia' icon={faFacebook} />
            <FontAwesomeIcon className='iconoMedia' icon={faInstagram} />
            <FontAwesomeIcon className='iconoMedia' icon={faWhatsapp} />
          </div>
        </div>

        <div className='explore'>
          <h3>Explore:</h3>
          <a href="#"> <LinkRouter to="/inicio" className="link">HOME</LinkRouter></a>
          <a href="#">  <LinkRouter to="/cities" className="link">CITIES</LinkRouter> </a> 
        </div>

      </div>
      <h2>DESIGN BY: DANIEL MARTÍNEZ ® 2022</h2>
    </div>

  )
}

export default Footer