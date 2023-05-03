import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div>
      <Navbar />
      <h1 className='text-center text-2xl mt-14 font-bold'>Good to have you back!</h1>
      <h2 className='pl-4 text-xl mt-14 font-bold'>Your orders uptil now :</h2>
      <div className="container px-5 pt-14 pb-24 ">
        HATS
        <div className="flex flex-wrap -m-4 mt-1">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-full md:h-36 w-full object-cover object-center" src="https://i.pinimg.com/originals/ae/6d/74/ae6d74822758988b648c2f2a0bae5f86.jpg" alt="blog" />
            </div>
            <div className="flex justify-between mt-1 font-bold">
              <div>Wide Brim Fedora</div>
              <div className="ml-auto">$20</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 pb-10 ">
        SNEAKERS
        <div className="flex flex-wrap -m-4 mt-1">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-full md:h-36 w-full object-cover object-center" src="https://i.pinimg.com/originals/19/a4/ff/19a4ffe2b8bb139055a50a74d2eeaa5a.jpg" alt="blog" />
            </div>
            <div className="flex justify-between mt-1 font-bold">
              <div>Nike Air Force</div>
              <div className="ml-auto">$65</div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-full md:h-36 w-full object-cover object-center" src="https://i.pinimg.com/originals/82/34/fd/8234fd55adb1ce7c80c3b65880bd21fd.jpg" alt="blog" />
            </div>
            <div className="flex justify-between mt-1 font-bold">
              <div>Fino Navy Low</div>
              <div className="ml-auto">$45</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 py-14 pb-18">
        JACKETS
        <div className="flex flex-wrap -m-4 mt-1">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-full md:h-full w-full object-cover object-center" src="https://i.pinimg.com/736x/d3/f3/4c/d3f34caf2bb9d4c8963125596f2c1a1d.jpg" alt="blog" />
            </div>
            <div className="flex justify-between mt-1 font-bold">
              <div>Levi's Puffer Jacket</div>
              <div className="ml-auto">$55</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 pt-10 pb-16">
        WATCHES
        <div className="flex flex-wrap -m-4 mt-1">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-full md:h-36 w-full object-cover object-center" src="https://i2.wp.com/livestores.co/wp-content/uploads/2021/06/AP81D200806OU74C.jpg?resize=600%2C600&ssl=1" alt="blog" />
            </div>
            <div className="flex justify-between mt-1 font-bold">
              <div>Apple iWatch Series 4</div>
              <div className="ml-auto">$74</div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/checkout">
      <button class="block mx-auto mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Proceed to Checkout →
      </button>
      </Link>
    </div>
  )
}
