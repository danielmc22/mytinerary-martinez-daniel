import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/navBar";
import Detalle from "./components/detalleCiudad";
import Home from "./components/paginas/home"
import Cities from "./components/paginas/cities"
import LogoCompleto from "./img/logo_completo.png";
import Footer from './components/footer';
import ScrollTop from "./components/scrollTop"
import CardItinerario from "./components/cardItinerario";
import SignUp from "./components/signUp/signup"
import SignIn from "./components/signUp/signup"



function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <NavBar />
        <ScrollTop />

        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} /> {/* ruta predefinida por si no encuenyra alguna*/}
          <Route path='/inicio' element={<Home />} />
          <Route path='/cities' element={<Cities />} />
          <Route path='/detalle/:id' element={<Detalle />} />
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/> 
          
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
