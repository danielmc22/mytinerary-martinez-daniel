import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/paginas/home"
import Cities from "./components/paginas/cities"
import './App.css';
import NavBar from "./components/navBar";
import LogoCompleto from "./img/logo_completo.png";
import Footer from './components/footer';


function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <NavBar />

        <Routes>
          <Route path='/inicio' element={<Home />} />
          <Route path='/cities' element={<Cities />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
