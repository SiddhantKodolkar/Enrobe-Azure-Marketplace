import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navadmin from './Navadmin';
function Database() {
  const [hats, setHats] = useState([]);
  const [sneakers, setSneakers] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/data')
      .then(response => {
        setHats(response.data.hats);
        setSneakers(response.data.sneakers);
        setJackets(response.data.jackets);
        setWatches(response.data.watches);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="h-screen bg-no-repeat bg-center bg-cover"
      style=
      {{
        backgroundImage: "url('https://th.bing.com/th/id/R.acd3a32bd6f84c744ad4b5ec5bc9d61c?rik=9yUHU47OBl4jrg&riu=http%3a%2f%2frg-group.co.uk%2fwp-content%2fuploads%2f2018%2f03%2fIn-store-shopping.jpg&ehk=1xJDgX6UhJ7GfAjHjxfpYTDo0CMBLXiqIZ0JEr5jZFw%3d&risl=&pid=ImgRaw&r=0')"
      }}>
      <Navadmin />
      <div className='bg-black bg-opacity-50 rounded text-white mx-6'>
      <h1 className='text-center font-bold text-2xl mt-16 pt-10'>Product Databases</h1>
        <div className='flex justify-around pt-1 mt-14 mx-4 pb-20'>
          <div className='bg-black bg-opacity-50 rounded px-4 py-6 border-solid border-2 border-white'>
            <h1 className='text-center mb-4 text-2xl'>Hats</h1>
            {hats.map(item => (
              <div
                className='py-1 flex justify-between'
                key={item.ID}>
                <div className='mr-4'> • {item.Name}</div>
                <div className='ml-auto'>${item.Price}</div>
              </div>
            ))}
          </div>
          <div className='bg-black bg-opacity-50 rounded px-4 py-6 border-solid border-2 border-white'>
            <h1 className='text-center mb-4 text-2xl'>Sneakers</h1>
            {sneakers.map(item => (
              <div
                className='py-1 flex justify-between'
                key={item.ID}>
                <div className='mr-4'> • {item.Name}</div>
                <div className='ml-auto'>${item.Price}</div>
              </div>
            ))}
          </div>
          <div className='bg-black bg-opacity-50 rounded px-2 py-6 border-solid border-2 border-white'>
            <h1 className='text-center mb-4 text-2xl'>Jackets</h1>
            {jackets.map(item => (
              <div
                className='py-1 flex justify-between'
                key={item.ID}>
                <div className='mr-4'> • {item.Name}</div>
                <div className='ml-auto'>${item.Price}</div>
              </div>
            ))}
          </div>
          <div className='bg-black bg-opacity-50 rounded px-2 py-6 border-solid border-2 border-white'>
            <h1 className='text-center mb-4 text-2xl'>Watches</h1>
            {watches.map(item => (
              <div
                className='py-1 flex justify-between'
                key={item.ID}>
                <div className='mr-4'> • {item.Name}</div>
                <div className='ml-auto'>${item.Price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Database;
