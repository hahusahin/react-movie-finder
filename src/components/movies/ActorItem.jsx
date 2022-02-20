import React from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import NotImage from '../../assets/not-found-img.png'

function ActorItem({actor}) {
  return (
    <div className="card bg-dark rounded rounded-3 mx-4 mx-sm-2 mx-md-3" style={{aspectRatio: "auto"}}> 
      <img className="card-img-top" alt="actor-img" style={{aspectRatio: "4 / 5"}}
        src={actor.profile_path ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${actor.profile_path}` : NotImage} 
      />
      <div className="card-body">
        <p className="card-text fw-bold">{actor.name}</p>
        <p className="card-text fst-italic">{actor.character}</p>
      </div>
    </div>
  )
}

export default ActorItem