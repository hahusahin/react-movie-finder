import React, { useContext } from 'react'
import MovieDBContext from '../../context/moviedb/MovieDBContext'
import MovieItem from './MovieItem'
import Spinner from '../layout/Spinner'
import { ACTION_CLEAR_ALL } from '../../config'

function MovieList() {

  const {movies, isLoading, dispatch} = useContext(MovieDBContext)

  if(!isLoading){
    return (
      <div className='container my-4 mx-auto'>
        <div className='mb-4 text-center'>
          <button
            className='btn btn-outline-light'
            onClick={() => dispatch({ type: ACTION_CLEAR_ALL })}
          >
            Clear Search
          </button>
        </div>        
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-4 gy-5 mx-1'>
          {movies.map((movie) => (
            <div className='col px-2 px-sm-4 px-md-4' key={movie.id}>
              <MovieItem movie={movie} />
            </div>
          ))}
        </div>        
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default MovieList