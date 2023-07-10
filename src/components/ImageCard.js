import React from 'react'
import { Link } from 'react-router-dom'

export default function ImageCard({ album }) {
   
  return (
    <div className='card'>
      <Link to={`/detail/${album.id}`}>
        <img src={album.thumbnailUrl}/>
        <h1>{ album.title}</h1>
        </Link>
    </div>
  )
}
