import React from 'react'
import Link from "next/link";

const BotomAgregarProducto = () => {
  return (
    <div className="border-b p-5">
 

    <Link href="/about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Agregar nuevo productos</Link>
    </div>
  )
}

export default BotomAgregarProducto
