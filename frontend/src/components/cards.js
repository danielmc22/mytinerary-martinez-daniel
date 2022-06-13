
import React, {useEffect, useState} from 'react' //IMPORTO PAQUETES DE REACT
import { Link as LinkRouter } from 'react-router-dom';
/* import axios from 'axios' */
import {connect} from 'react-redux';
import "../styles/cards.css"
import ciudadesActions from "../redux/actionsCreators/ciudadesActions"
import NotFoundImg from "../img/not_found.png"


function Cards (props) {

  const [busqueda, setBusqueda] = useState("")    /* estado que controlará l que se digita en la busqueda  el 1o representa lo que se va a escribir en el input */
    
  console.log(props)

  useEffect(()=>{
     props.fetchearCiudades() 
}, []);


  const searching = (search) => {
    setBusqueda(search.target.value);
    props.filtro(props.cities, search.target.value);

  };

    return (
        <div className='containerCards'>

        <input className='inputSearch' 
            type="text"
            value={busqueda}                                       /* el valor del input será el estado busqueda  */
            placeholder="Search Your Next Destination..."
            onChange={searching}         /*setSearchTerm es igual a event.target.value*/
            />                             

            {props.filterCities?.length !== 0 && props.filterCities!= null ? (
             props.filterCities?.map((ciudad) => (

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
    );
  }

const mapStateToProps = (state) => {

return{
  cities: state.Data.cities,
  filterCities: state.Data.filterCities,     
}
}

const mapDispatchToProps = {
 fetchearCiudades: ciudadesActions.fetchearCiudades,
 filtro : ciudadesActions.filtro
}     

export default connect(mapStateToProps,mapDispatchToProps)(Cards)