import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../API'
import MovieDBContext from '../context/moviedb/MovieDBContext'
import { calcMovieLength } from '../utils'
import { ImClock } from 'react-icons/im'
import moment from 'moment'
import { ACTION_SET_ISLOADING, ACTION_GET_MOVIE_DETAILS, IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import { Spinner } from 'react-bootstrap'
import ActorItem from '../components/movies/ActorItem'
import NotImage from '../assets/not-found-img.png'

function Movie() {

  const {movie, actors, isLoading, dispatch} = useContext(MovieDBContext)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    
    window.scrollTo(0, 0)

    const getDetails = async() => {
      dispatch({type: ACTION_SET_ISLOADING})
      const data = await fetchMovieDetails(params.movieId)
      dispatch({type: ACTION_GET_MOVIE_DETAILS, payload: data})
    }

    getDetails()

  }, [dispatch, params.movieId])


  if(isLoading){
    return <Spinner />
  }

  return (
    <>
      {/* Back to Search */}
      <div className='container mt-4 text-center'>
        <button 
          className='btn btn-outline-light'
          onClick={()=> navigate(-1)}
        >
          Back to Search
        </button>
      </div>
      {/* Movie Details */}
      <div className='container my-4'>
        <div className='row'>
          <div className='col-md-4 col-xl-3 px-5 ps-md-0 pe-md-3 px-lg-4 py-3'>
            <img className='w-100 h-100 rounded rounded-3'
              src={movie.poster_path ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}` : NotImage} 
              alt='poster'/>
          </div>
          <div className='col-md-8 col-xl-9 px-4 px-sm-5 ps-md-3 pe-md-0 px-lg-4 py-3'>
            <h2 className='mb-4'>{`${movie.title}  (${moment(movie.release_date).year()})`}</h2>
            <h6 className='mb-4'>
              {(movie.genres) && movie.genres.map( (genre) => (
                <span key={genre.id} className="badge bg-success rounded-pill me-2 mb-2 fs-6">{genre.name}</span> 
              ))}              
            </h6>
            <div className='mb-4'>
              <ImClock className='fs-5'/>
              <span className='ms-2 fs-5'>{calcMovieLength(movie.runtime)}</span>
            </div>
            <div className='mb-4'>
              <span className="badge bg-primary rounded-pill fs-5 me-2">{movie.vote_average}</span>
              <span className='fs-5'>User Score</span>
            </div>
            <h5>Overview</h5>
            <p className='mb-3 lh-lg'>{movie.overview}</p>
          </div>
        </div>
      </div>

      {/* Actors */}
      <div className='container mb-4'>
        <h2 className='mb-5 text-center fw-bold'>ACTORS</h2>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4'>
          {actors.map( (actor, i) => {
            if(i < 20){
              return (
                <div className='col' key={actor.id}>
                  <ActorItem actor={actor}/>
                </div>
              )
            }
          })}
        </div>
      </div>

    </>
   
  )
}

export default Movie