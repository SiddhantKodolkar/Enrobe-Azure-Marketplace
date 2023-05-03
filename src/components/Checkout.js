import React from 'react'
import Navbar from './Navbar'
export default function Checkout() {
  return (
    <div>
      <Navbar />
      <h2 className='text-center mt-20 text-2xl font-bold'>Order Summary</h2>
      <div className="flex flex-col mt-10 mx-2  mb-6">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead
                  className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr >
                    <th scope="col" className="px-6 py-4">Sno</th>
                    <th scope="col" className="px-6 py-4">Item Image</th>
                    <th scope="col" className="px-6 py-4">Item Name</th>
                    <th scope="col" className="px-6 py-4">Price($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <img className="lg:h-20 md:h-20 w-20 object-cover rounded my-3 mx-5 object-center" src="https://i.pinimg.com/originals/ae/6d/74/ae6d74822758988b648c2f2a0bae5f86.jpg" alt="blog" />
                    <td className="whitespace-nowrap px-6 py-4">Wide Brim Fedora</td>
                    <td className="whitespace-nowrap px-6 py-4">20</td>
                  </tr>
                  <tr
                    className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <img className="lg:h-20 md:h-20 w-20 object-cover rounded my-3 mx-5 object-center" src="https://i.pinimg.com/originals/19/a4/ff/19a4ffe2b8bb139055a50a74d2eeaa5a.jpg" alt="blog" />
                    <td className="whitespace-nowrap px-6 py-4">Nike Air Force</td>
                    <td className="whitespace-nowrap px-6 py-4">65</td>
                  </tr>
                
                  <tr
                    className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <img className="lg:h-20 md:h-20 w-20 object-cover rounded my-3 mx-5 object-center" src="https://i.pinimg.com/originals/82/34/fd/8234fd55adb1ce7c80c3b65880bd21fd.jpg" alt="blog" />
                    <td className="whitespace-nowrap px-6 py-4">Fino Navy Low</td>
                    <td className="whitespace-nowrap px-6 py-4">45</td>
                  </tr>

                  <tr
                    className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                    <img className="lg:h-20 md:h-20 w-20 object-cover rounded my-3 mx-5 object-center" src="https://i.pinimg.com/736x/d3/f3/4c/d3f34caf2bb9d4c8963125596f2c1a1d.jpg" alt="blog" />
                    <td className="whitespace-nowrap px-6 py-4">Levi's Puffer Jacket</td>
                    <td className="whitespace-nowrap px-6 py-4">55</td>
                  </tr>

                  <tr
                    className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">5</td>
                    <img className="lg:h-20 md:h-20 w-20 object-cover rounded my-3 mx-5 object-center" src="https://i2.wp.com/livestores.co/wp-content/uploads/2021/06/AP81D200806OU74C.jpg?resize=600%2C600&ssl=1" alt="blog" />
                    <td className="whitespace-nowrap px-6 py-4">Apple iWatch Series 4</td>
                    <td className="whitespace-nowrap px-6 py-4">74</td>
                  </tr>

                  <tr
                    className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium"></td>
                    <td className="whitespace-nowrap px-6 pt-20 font-bold">Payable Amount </td>
                    <td className="whitespace-nowrap px-6 pt-14"></td>
                    <td className="whitespace-nowrap px-6 pt-20 font-bold">$314</td>
                  </tr>

                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <button className="block mx-auto mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Pay</button>
    </div>
  )
}
