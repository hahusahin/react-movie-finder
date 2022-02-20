import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'

function SearchResItem({movie}) {
  return (
    <div className="card mb-3"> {/*style="max-width: 540px;"*/}
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={`/movie/${movie.id}`}>
            <img
              className="img-fluid rounded-start"
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt="poster"
            />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to={`/movie/${movie.id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
              <h5 className="card-title">{movie.original_title}</h5>
            </Link>
            <p className="card-text">
              <small className="text-muted">
                {moment(movie.release_date).format("Y MMMM")}
              </small>
            </p>
            <p className="card-text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResItem