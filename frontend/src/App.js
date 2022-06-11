import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'
import userActions from '../src/redux/actionsCreators/userActions'
import './App.css';
import NavBar from "./components/navBar";
import Detalle from "./components/detalleCiudad";
import Home from "./components/paginas/home"
import Cities from "./components/paginas/cities"
import LogoCompleto from "./img/logo_completo.png";
import Footer from './components/footer';
/* import ScrollTop from "./components/scrollTop" */
import CardItinerario from "./components/cardItinerario";
import SignUp from "./components/signUp/signUp";
import SignIn from "./components/signUp/signIn";
import {connect} from "react-redux";
import Snackbar from './components/Snackbar';

function App(props) {

  useEffect(() => {
                                                            // ----PASSPORT TOKEN - PERMANECER CONECTADO !!!
    if(localStorage.getItem('token')!== null){             //va verificar dentro de localstorage - obtiene los items - si hay algo dentro del token (difer. a null)
      const token = localStorage.getItem("token")          //guardo el token encontrado en : const token
      props.VerificarToken(token)                         //mando el token a la funcion VerificarToken que esta en actions.
    }
  },[])


  return (
    <BrowserRouter>

      <div className="App">
      
        <NavBar />
{/*         <ScrollTop /> */}
        <Snackbar />

        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} /> {/* ruta predefinida por si no encuenyra alguna*/}
          <Route path='/inicio' element={<Home />} />
          <Route path='/cities' element={<Cities />} />
          <Route path='/detalle/:id' element={<Detalle />} />

          {!props.user && (<>
           <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/> 
          </>) }
          

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  }
}

const mapDispatchToProps = {
  VerificarToken: userActions.VerificarToken,
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
