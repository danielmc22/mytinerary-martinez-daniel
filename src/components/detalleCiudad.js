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



function DetalleCiudad (props) {   //estas props llegan por medio de mapDispatchToProps

  const {id} = useParams()      //el ID llega aqui al componente detalle como parametro a traves de useParams y le llega desde cities desde el boton de enlace de la card
  
  const {city, itineraries } = props    //destructuring de las props

  console.log(props)

     useEffect(()=>{
      props.fetchearUnaCiudad(id)       //llamo a fetchearUnaCiudad y la saco de las props
      props.itinerariesPerCity(id)
      },[])


  return (
      <div className='containerDetalle'>

      <div>
      {city._id && (  
        <div>

             <div className='card2'>
              <img className='imgCard2' src={city.image}  alt="imagen-titulo-cards"></img>
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

          //En este caso llamo a la ACTION "fetchearUnaCiudad" - la llamo de "CiudadesActions" .y llamo fetchear una ciudad 
const mapDispatchToProps = {          
    fetchearUnaCiudad: CiudadesActions.fetchearUnaCiudad,
    itinerariesPerCity: ItinerariosActions.itinerariesPerCity,  //y llamo a la ACTION "itinerariesPerCity" DESDE...
}

const mapStateToProps = (state) => {   //Toma los estados 
    return{
    city: state.Data.city,              //me retorna los estados city e itineraries
    itineraries: state.itinerariosReducers.itineraries,

}}

export default connect (mapStateToProps, mapDispatchToProps) (DetalleCiudad)