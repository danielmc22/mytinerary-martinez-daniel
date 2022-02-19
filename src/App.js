
import './App.css';
import NavBar from "./components/navBar";
import Carousel from "./components/carousel";
import LogoCompleto from "./img/logo_completo.png";

/* import Header from "./components/header"; */


function App() {

  return (

    <div className="App">

    <NavBar/>

    <div className="headerIndex">
      <img src={LogoCompleto} className="logoCompleto"/>
      <h2> Carousel</h2>
    </div>
    
    <Carousel/>

    {/* <Header/> */}
    

      
    </div>
  );
}

export default App;
