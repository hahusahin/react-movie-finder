import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import React from 'react'
import { Link } from 'react-router-dom'
import NotImage from '../../assets/not-found-img.png'

function MovieItem({movie}) {
  return (
    
    <div className="position-relative">
      <Link to={`/movie/${movie.id}`}>
        <img
          style={{width: "100%", borderRadius: "20px", padding: "4%"}}
          src={movie.poster_path ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}` : NotImage} 
          alt='poster'
        />
      </Link>
      <p className='text-center'>{movie.title}</p>
    </div>
  )
}

export default MovieItem