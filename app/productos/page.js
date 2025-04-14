

import React from 'react'
import axios from 'axios'

import Tablaproductos from "./Tablaproductos";
import BotomAgregarProducto from "./BotomAgregarProducto";



async function pedidoraDeDatos() {
  try {
    const res = await axios({
      url: "https://randomuser.me/api/",
      method: "GET",
    })
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}





async function page() {

  const data = await pedidoraDeDatos()
  console.log(data)
  
  return (

    <div className="bg-gray-30 shadow-lg flex-grow">

      
  

      <BotomAgregarProducto />

      <Tablaproductos productos={data} />
 

    </div>
  );
}

export default page
