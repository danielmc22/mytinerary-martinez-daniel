import { padding } from '@mui/system'
import React from 'react'
import "../styles/detalleCard.css"
import { Link as LinkRouter } from 'react-router-dom';


const detalleCiudad = () => {
  return (

      <div className='containerDetalle'>

        <h1> For now this page is under construction... </h1>
        <LinkRouter to="/cities" className="link BtnCities">COME BACK TO CITIES</LinkRouter>

      </div>
  )
}

export default detalleCiudad