import React from 'react'
import "../styles/footer.css"
import ImagenHeder from "../img/imagenHeader.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (

    <div className='footerContainer'>

        <div className='primerElemento'>
            <img src={ImagenHeder}/>
            <p>MyTinerary 2022</p>
        </div>
        

        <div className='socialMedia'>
            <h3>Social Media:</h3>
            <div className='iconsMedia'>
                <FontAwesomeIcon className='iconoMedia' icon={faFacebook}/>
                <FontAwesomeIcon className='iconoMedia' icon={faInstagram}/>
                <FontAwesomeIcon className='iconoMedia' icon={faWhatsapp}/>
            </div>
        </div>
        

        <div className='explore'>
            <h3>Explore:</h3>
             <a href="#">HOME</a>
             <a href="#">CITIES</a>
        </div>
        
      
      </div>
      
      
    
  )
}

export default Footer