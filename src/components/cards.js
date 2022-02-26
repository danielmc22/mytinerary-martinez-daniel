
import React from 'react'
import cities from "../../src/ciudades.js"
import "../styles/cards.css"
import { useState } from 'react'



const Cards = () => {
            {/*ENTRE CONST Y EL RETURN SE HACEN OPERACIONES LOGICAS Y SI ES NECESARIO SE CREAN CONST Y DEMAS*/ }
    const [searchTerm, setSearchTerm] =  useState("");  { /* el 1o representa lo que se va a escribir en el input */ }
    
    return (
        <div className='containerCards'>

        <input className='inputSearch' 
            type="text" 
            placeholder="Search your destination..."
            onKeyUp={event => {setSearchTerm(event.target.value)}}  /*setSearchTerm es igual a event.target.value*/
            />
        {cities.filter((city) => {
            if (searchTerm == "" ) {
                return city
            } else if(city.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return city
            }
        }).map(ciudad => 
          <div className='card'>
            <img className='imgCard' src={ciudad.image}  alt="imagen-titulo-cards"></img>
            <div className='ContainerTxtCard' >
              <div className='containerTitulo' >
                <h3 className="">{ciudad.name} </h3>
              </div>
              <p>  </p>
              <p>  </p>
              <p>  </p>
            </div>
          </div>
          )} 
  
        </div>
    )
  }
  
  export default Cards