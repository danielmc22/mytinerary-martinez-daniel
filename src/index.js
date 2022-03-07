import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fondo from './img/fondoHeader.jpg';
//REDUX  --  REDUX--


import { Provider } from "react-redux";                   //para proveer del store a la app.
import { createStore, applyMiddleware } from 'redux'    /* SE CREA EL STORE  -- Se*/
import thunk from 'redux-thunk'
import mainReducer from './redux/reducers/mainReducer'   //IMPORTO mainReducer que es el reducer principal 

const reduxStore = createStore(mainReducer,applyMiddleware(thunk))  //SE CREA EL ALMACENAMIENTO Y SE LE PASA EL REDUCER PRINCIPAL QUE ESTA EN LA CARPETA REDUCERS
                                                                    //thunk es una variacion de la libreria Redux que le da este funcionamiento
ReactDOM.render(

  <React.StrictMode>
    <Provider store={reduxStore}>  {/* se envuelve a la app con provider y se le pasa el store creado en const reduxStore */}
       <App />
    </Provider>
  </React.StrictMode>,
   
  document.getElementById('root')
);


