
import React, {useEffect, useState} from 'react' //IMPORTO PAQUETES DE REACT
import axios from 'axios'
import cities from "../../src/ciudades.js"
import "../styles/cards.css"




const Cards = () => {
                         {/*ENTRE CONST Y EL RETURN SE HACEN OPERACIONES LOGICAS Y SI ES NECESARIO SE CREAN CONST Y DEMAS*/ }
     /* const [searchTerm, setSearchTerm] =  useState("")  */    { /* el 1o representa lo que se va a escribir en el input */ }
  
    /* useEffect(()=>{
  
    axios.get(`https://localhost:4000/api/allcities`)
    .then(response=>console.log(response) )
  
  },[])  */
  /* console.log(apidata) */


  const [ciudades, setCiudades] = useState([])           /* estado que almacenará los datos dinamicos */
  const [cardCiudades, setCardCiudades] = useState([])   /* estados que controlaran la tarjeta estatica */
  const [busqueda, setBusqueda] = useState("")           /* estados que controlaran la busqueda en el input */

  const peticionGet =async()=>{
    await axios.get(`https://localhost:4000/api/allcities`)
    .then(response=>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
  }

  useEffect(()=>{
  peticionGet();
  },[])

    return (
        <div className='containerCards'>

        <input className='inputSearch' 
            type="text" 
            placeholder="Search your destination..."
            onKeyUp={event => {setBusqueda(event.target.value)}}  /*setSearchTerm es igual a event.target.value*/
            />                       {/* cierre input  */}



          <div className='card'>
            <img className='imgCard'   alt="imagen-titulo-cards"></img>
            <div className='ContainerTxtCard' >
              <div className='containerTitulo' >
                <h3 className=""> </h3>
              </div>
              <p>  </p>
              <p>  </p>
              <p>  </p>
            </div>
          </div>










        {/* {cities.filter((city) => {
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
          )}  */}
  
        </div>
    )
  }
  
  export default Cards