import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ImageDetail() {
  const[photo, setphoto]=useState({});
const params =useParams ();
  useEffect(() => {
    const getphotos = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${params.id}`
        );
        console.log(res);
        setphoto (res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getphotos();
  }, []);
  return (
    <div className='image-container'>
      <img src={photo.url} alt='' />
    </div>
  )
}
