
import React, {useEffect, useState} from 'react' //IMPORTO PAQUETES DE REACT
import { Link as LinkRouter } from 'react-router-dom';
import axios from 'axios'
import "../styles/cards.css"
import NotFoundImg from "../img/not_found.png"


const Cards = () => {
                         {/*ENTRE CONST Y EL RETURN SE HACEN OPERACIONES LOGICAS Y SI ES NECESARIO SE CREAN CONST Y DEMAS*/ }
         
  const [ciudades, setCiudades] = useState([])           /* se crea el estado para controlar los datos dinámicos */
  const [cardCiudades, setCardCiudades] = useState([])     /* estados que controlaran la tarjeta estatica */
  const [busqueda, setBusqueda] = useState("")           /* estado que controlará l que se digita en la busqueda  el 1o representa lo que se va a escribir en el input */
    

  console.log(ciudades)
  console.log(busqueda)

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
      if(item.name.toString().toLowerCase().startsWith(palabraBusqueda.trim().toLowerCase())){
        return item

      }
    })
    setCiudades(resultadoBusqueda)
  }

  useEffect(()=>{
  peticionGet();
  },[])


    return (
        <div className='containerCards'>

        <input className='inputSearch' 
            type="text"
            value={busqueda}                                       /* el valor del input será el estado busqueda  */
            placeholder="Search Your Next Destination..."
            onChange={capturaInput}         /*setSearchTerm es igual a event.target.value*/
            />                             {/* cierre input */}

          {ciudades.length !== 0 ? ( ciudades &&
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

                <div className='btnContainer'>
                  <LinkRouter to={`/detalle/${ciudad._id}`} className="link">More Info</LinkRouter>
                </div>

            </div>
          </div>    

           ) )) :(
                <div className='containerImgNot'>
                  <img src={NotFoundImg} className="imgNotFound" /> 
                </div>
           )}

        </div>
    )
  }
  
  export default Cards