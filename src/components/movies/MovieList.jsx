import React, { useContext } from 'react'
import MovieDBContext from '../../context/moviedb/MovieDBContext'
import MovieItem from './MovieItem'
import Spinner from '../layout/Spinner'

function MovieList() {

  const {movies, isLoading} = useContext(MovieDBContext)

  if(!isLoading){
    return (
      <div className='container my-5 mx-auto'>
        <h2 className='mb-5 text-center fw-bold'>SEARCH RESULTS</h2>
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