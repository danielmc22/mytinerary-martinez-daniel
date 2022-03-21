const Router = require('express').Router()
const validator = require('../config/validator')
;
const ciudadesController = require('../controllers/ciudadesControllers'); /* requerimos el archivo del controlador yendo a la carpeta de controladores */
const {obtenerCiudades, cargarCiudad,obtenerCiudadPorId, borrarCiudad, modificarCiudad}=ciudadesController  /* aqui se desestructura el objeto(obtener informacion de las props de manera separada) requerido en linea 3   */
                                            /* a {obtenerCiudades} se le asigna lo requerido en la linea 3  */

const itinerariosControllers = require(`../controllers/itinerariosControllers`);
const { obtenerItinerios, obtenerUnItinerario,crearItinerario,borrarItinerario, actualizarItinerario, likeDislike /* getCityItineraries */} = itinerariosControllers;

const usersControllers = require('../controllers/userControllers');                 //requerimos los controllers
const {signUpUsers, signInUser, signOutUser, verifyEmail, verificarToken }= usersControllers                      //destructuring de controllers

const passport = require ('../config/passport')

/*                      RUTAS   CIUDADES   */
Router.route('/allcities')                   /* Del metodo Router se establece una ruta --- Este es el endpoint por el cual se va a obtener el get   --  el nombre entre parentesis es el nombre del endpoint y ese lo defino yo*/
.get(obtenerCiudades)                       /* el metodo get va llamar a la fx obtenerCiudades */
.post(cargarCiudad)                            /* el metodo post llama automaticamente a CARGARCIUDADES que es una fx está ubicada en ciudadescONTROLLER */


Router.route("/cities/:id")   //Al poner ":" significa que el id va a ser un parametro
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerCiudadPorId)

/*                     RUTAS  ITINERARIOS   */
Router.route("/itinerarios")
.get(obtenerItinerios)
.post(crearItinerario)

Router.route("/itinerarios/:id")
.delete(borrarItinerario)
.put(actualizarItinerario)
.get(obtenerUnItinerario)

Router.route("/cityItinerarios")
.get(/* getCityItineraries */)

/*                       RUTAS USERS  */
Router.route('/auth/signUp')
.post(validator, signUpUsers)  //llega la info de actions, y pasa primero a validator , si pasa las pruebas le pasa los datos a "signUser"

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString')  //RECIBE EL LINK DE USUARIO
.get(verifyEmail)   //LLAMA A FUNCION DE VERIFICACIION

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)  //passport llama al metodo authenticate y le pasa el tipo de token (jwt) en el segundo parametro se niega que sea un acceso de tipo session, ya que es una autenticacion de usuario
                                                                //si pasa la verif

Router.route('/likesDislike/:id')
.put(passport.authenticate('jwt',{ session:false }), likeDislike)

module.exports = Router