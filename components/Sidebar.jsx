import React from 'react'
import Link from "next/link";

const Sidevar = () => {
  return (
 

    <aside className="w-64  bg-gray-800 text-white  p-10 h-screen sticky  top-0">
      <h2 className="text-xl font-bold">Menú</h2>
     
      <ul className="mt-4 space-y-2">

        <li>
          <Link href="/" className="block p-2 hover:bg-gray-700">
            Inicio
          </Link>
        </li>

        <li>
          <Link href="/productos" className="block p-2 hover:bg-gray-700">
            Productos
          </Link>
        </li>

        <li>
          <Link href="/contacto" className="block p-2 hover:bg-gray-700">
          Servicios
          </Link>
        </li>

      </ul>
      
    </aside>     
  );
}

export default Sidevar
