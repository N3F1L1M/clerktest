

import React from 'react'
import axios from 'axios'

import Tablaproductos from "./Tablaproductos";
import BotomAgregarProducto from "./BotomAgregarProducto";







 function page() {


  return (

    <div className="bg-gray-30 shadow-lg flex-grow">

      
  

      <BotomAgregarProducto />

      <Tablaproductos />
 

    </div>
  );
}

export default page
