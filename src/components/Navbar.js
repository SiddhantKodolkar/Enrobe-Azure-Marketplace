import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='pb-10'>
      <nav 
      className={`fixed bg-black w-full h-15`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <span className="text-2xl text-gray-300 font-medium">Enrobe</span>
              </div>
              <div className="md:ml-auto flex flex-wrap items-center text-base justify-center hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 ">
                  <Link to="/user" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:transition-bg duration-500">Cart</Link>
                  <Link to="/help" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:transition-bg duration-500">Help</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
