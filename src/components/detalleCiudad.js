import React, {useEffect, useState} from 'react'
import "../styles/detalleCard.css"
import { Link as LinkRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../styles/cards.css"


const DetalleCiudad = () => {

  const [ciudades, setCiudades] = useState([])
  const {id} = useParams()      //el ID llega aqui al componente detalle como parametro a traves de useParams y le llega desde cities desde el boton de enlace de la card
                                
     useEffect(()=>{

      axios.get(`http://localhost:4000/api/allcities`)       /* CLASE 4 DE MERN 2DA PARTE DEL VIDEO */
     .then(response => setCiudades((response.data.response.ciudades).filter(cardData => cardData._id == id) )) 

      },[])



  return (

      <div className='containerDetalle'>

        <h1> For now this page is under construction... </h1>
        <LinkRouter to="/cities" className="link BtnCities">COME BACK TO CITIES</LinkRouter>

        
         {ciudades.map(ciudad => 
          
            <div className='card'>
              <img className='imgCard' src={ciudad.image}  alt="imagen-titulo-cards"></img>
            <div className='ContainerTxtCard' >
              <div className='containerTitulo' >
                <h3 className="">{ciudad.name} </h3>
              </div>
              
                <p> {"Country: " + ciudad.country} </p>
                <p> {"Official Language: " + ciudad.Language} </p>
                <p> {"Description: " + ciudad.descripcion} </p>
            </div>

          </div>
          )} 
      </div>
      
  )
}

export default DetalleCiudad