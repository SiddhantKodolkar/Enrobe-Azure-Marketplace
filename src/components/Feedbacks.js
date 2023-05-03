import React, { useState, useEffect } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import Navadmin from './Navadmin';
import adminfeed from '../images/adminfeed.jpg'
const Feedbacks = () => {
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    // Initialize the BlobServiceClient
    const accountName = 'miniprojectcc';
    const sasToken = '?sv=2021-12-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2023-05-02T22:16:22Z&st=2023-05-02T14:16:22Z&spr=https&sig=lsbvj40Xce7Nl1NIsJDLdULgGnFzprsYdOnLnazJ%2Bco%3D';
    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net?${sasToken}`);

    // Get a reference to the container
    const containerName = 'container1';
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // List the blobs in the container
    const getBlobs = async () => {
      const blobItems = [];
      for await (const blob of containerClient.listBlobsFlat()) {
        blobItems.push(blob);
      }
      setBlobs(blobItems);
    };
    getBlobs();
  }, []);

  return (
    <div className="h-screen bg-no-repeat bg-center bg-cover" 
    style=
    {{
      backgroundImage: `url(${adminfeed})`
    }}>
      <Navadmin />
      
      <div className='bg-black bg-opacity-70 text-white font-bold mt-28 rounded px-2 py-10 mx-20'>
      <h2 className='mt-10 text-center text-white font-bold text-2xl mb-10'>Return Requests Received</h2>
        <ul>
          {blobs.map((blob) => (
            <li
              className='my-2'
              key={blob.name}>• {blob.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedbacks;
