import React, { useContext } from 'react'
import MovieDBContext from '../../context/moviedb/MovieDBContext'
import MovieItem from './MovieItem'
import Spinner from '../layout/Spinner'
import { ACTION_CLEAR_ALL, ACTION_GET_MOVIES, ACTION_LOAD_MORE, ACTION_SET_ISLOADING } from '../../config'
import { searchMovies } from '../../API'

function MovieList() {

  const {movies, loadMore, isLoading, dispatch} = useContext(MovieDBContext)

  const loadMoreMovies = async() => {

    dispatch({ type: ACTION_SET_ISLOADING })
    
    const page = loadMore.page + 1
    const newMovies = await searchMovies(loadMore.query, page)

    dispatch({ type: ACTION_GET_MOVIES, payload: [...movies, ...newMovies] })

    dispatch({ type: ACTION_LOAD_MORE, payload: {...loadMore, page: page}})
  }

  if(movies){
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
        { !isLoading && (
          <div className='my-4 text-center'>
            <button
              className='btn btn-lg btn-outline-light'
              onClick={loadMoreMovies}
            >
              Load More
            </button>          
          </div>
        )}
        { isLoading && <Spinner /> }
      </div>
    )
  }
}

export default MovieList