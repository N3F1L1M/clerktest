"use client"

import Link from "next/link";
import React, { useState } from 'react'

const Sidevar = () => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
    
      <button onClick={() => setIsOpen(!isOpen)} className="absolute top-18 left-3 z-50 bg-purple-800 text-white p-2 rounded-md shadow-md "> 
         {isOpen ? "X" : "☰"} </button>

      

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64 p-10" : "w-12 p-0"
        } bg-gray-800 text-white h-screen sticky top-0 overflow-hidden transition-all duration-300`}
      >
        {isOpen && (
          <>
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
          </>
        )}
      </aside>
    </div>
  );
};

export default Sidevar;