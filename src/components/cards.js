
import React, {useEffect, useState} from 'react' //IMPORTO PAQUETES DE REACT
import axios from 'axios'
import cities from "../../src/ciudades.js"
import "../styles/cards.css"




const Cards = () => {
                         {/*ENTRE CONST Y EL RETURN SE HACEN OPERACIONES LOGICAS Y SI ES NECESARIO SE CREAN CONST Y DEMAS*/ }
     /* const [searchTerm, setSearchTerm] =  useState("")  */    { /* el 1o representa lo que se va a escribir en el input */ }
  
  const [ciudades, setCiudades] = useState()           /* estado que almacenará los datos dinamicos */
  const [cardCiudades, setCardCiudades] = useState()   /* estados que controlaran la tarjeta estatica */
  const [busqueda, setBusqueda] = useState("")           /* estados que controlaran la busqueda en el input */

  console.log(ciudades)

  const peticionGet = async () => {
    await axios.get (`http://localhost:4000/api/allcities`)
    .then (response=>{
      console.log(response.data.response.ciudades);
      setCiudades(response.data.response.ciudades);
      setCardCiudades(response.data.response.ciudades);
    }).catch(error => {
      console.log(error)
   }) 
  }

  const capturaInput = event =>{          /* captura lo escrito en elinput y almacenarlo en el estado */
    setBusqueda(event.target.value)       /* almacenar la busqueda dentro del estado */
    filtro (event.target.value)
  }      

  const filtro = (palabraBusqueda) =>{
    var resultadoBusqueda = cardCiudades.filter ((item)=>{
      if(item.name.trim().toString().toLowerCase().includes(palabraBusqueda.toLowerCase())  ){
        return item
      }
    })
    setCiudades(resultadoBusqueda)
  }

  useEffect(()=>{
  peticionGet();
  },[])


  /* ESTE ES OTRO METODO PARA LLAMAR A LA API  -------------------------------------------------------------------- */
  /* useEffect(()=>{

     axios.get (`http://localhost:4000/api/allcities`)
    .then(response =>  setCiudades(response.data.response.ciudades))

  },[]) */
/* ESTE ES OTRO METODO PARA LLAMAR A LA API  -------------------------------------------------------------------- */


    return (
        <div className='containerCards'>

        <input className='inputSearch' 
            type="text"
            value={busqueda}                                       /* el valor del input será el estado busqueda  */
            placeholder="Search Your Next Destination..."
            onChange={capturaInput}         /*setSearchTerm es igual a event.target.value*/
            />                             {/* cierre input */}

          {ciudades && 
          ciudades.map((ciudad) => (

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

           ) )}

          
        </div>
    )
  }
  
  export default Cards