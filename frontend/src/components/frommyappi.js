/*   */
import React, { useEffect, useState } from 'react'
import  {cargarDatos, eliminarCiudad, modificarCiudad}  from '../apiCalls'


/*  Esta fx se pone en marcha cuando se oprime el boton de submit en el form donde agregamos los datos a cargar */
const handleSubmit = (event) => {                            /*  envia aqui el evento*/
    event.preventDefault();                              /*----> evita que la pag. se refresque al hacer el submit del form  */
    const data = new FormData(event.currentTarget);         /* guardo en const data lo que obtengo del formulario target actual del form */
    // eslint-disable-next-line no-console
    console.log(data)
    var dataInput ={                                        /* dentro de dataInput voy a guardar un objeto que son los datos ingresados */
      ciudad: data.get('Ciudad'),
      pais: data.get('Pais'),
      descripcion:data.get('Descripcion')
    };
    
    cargarDatos(dataInput)                          /* llamo a la fx cargarDatos que esta en apiCall y le paso el objeto dataInput */
    setReload(!reload)

  };