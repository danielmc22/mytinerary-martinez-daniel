import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navBar";


function App() {

  return (

    <div className="App">

    <NavBar/>
    <h1>Hola probando</h1>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo React Clase 1
        </a>
        <h2 style="color: green">iniciando React</h2>

      </header>
    </div>
  );
}

export default App;
