import React, {useEffect, useState} from 'react'
/* import "../styles/detalleCard.css" */
import { Link as LinkRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import axios from 'axios'
/* import "../styles/cards.css" */
import CiudadesActions from "../redux/actionsCreators/ciudadesActions"
import { connect } from 'react-redux';
import CardItinerario from "../components/cardItinerario"
import ItinerariosActions from "../redux/actionsCreators/itinerariosActions"



function DetalleCiudad (props) {

  const {id} = useParams()      //el ID llega aqui al componente detalle como parametro a traves de useParams y le llega desde cities desde el boton de enlace de la card
  
  const {city, itineraries } = props

  console.log(props)

     useEffect(()=>{
      props.fetchearUnaCiudad(id)
      props.itinerariesPerCity(id)
      },[])


  return (
      <div className='containerDetalle'>

      <div>
      {city._id && (  
        <div>

             <div className='card'>
              <img className='imgCard' src={city.image}  alt="imagen-titulo-cards"></img>
            <div className='ContainerTxtCard' >
              <div className='containerTitulo' >
                <h3 className="">{city.name} </h3>
              </div> 

              
              
                {/* <p> {"Country: " + city.country} </p> */}
                
             </div>
          </div>   
          {
            itineraries.length > 0 && itineraries.map(itinerario => {
              return <CardItinerario itinerario={itinerario} /> 
            })
          }
            
      </div>
      
      )}
      </div>
      <LinkRouter to="/cities" className="link BtnCities">COME BACK TO CITIES</LinkRouter>
      </div>
   ) }


const mapDispatchToProps = {
    fetchearUnaCiudad: CiudadesActions.fetchearUnaCiudad,
    itinerariesPerCity: ItinerariosActions.itinerariesPerCity,
}

const mapStateToProps = (state) => {
    return{
    city: state.Data.city,
    itineraries: state.itinerariosReducers.itineraries,

}}



export default connect (mapStateToProps, mapDispatchToProps) (DetalleCiudad)