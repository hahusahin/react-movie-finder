import React, { useContext, useEffect, useState } from 'react'
import MovieDBContext from '../../context/moviedb/MovieDBContext'
import MovieItem from './MovieItem'
import Spinner from '../layout/Spinner'
import { ACTION_CLEAR_ALL, ACTION_GET_MOVIES, ACTION_SEARCH_UTILS, ACTION_SET_FILTERED_MOVIES, ACTION_SET_ISLOADING, ACTION_SET_MOVIE_FILTERS } from '../../config'
import { searchMovies } from '../../API'
import Accordion from 'react-bootstrap/Accordion'

function MovieList() {

  const {movies, filteredMovies, filters, searchUtils, isLoading, dispatch} = useContext(MovieDBContext)


  const handleFilterChange = (event) => {
    dispatch({type: ACTION_SET_MOVIE_FILTERS, payload: {...filters, [event.target.name]: event.target.value}})
  }

  const clearFilters = () => {
    dispatch({type: ACTION_SET_MOVIE_FILTERS, payload: { genre: "all", adult: "all", rating: 0, relDate: 0 }})
    dispatch({ type: ACTION_SET_FILTERED_MOVIES, payload: movies })
  }

  // Filters the search results depending on the Genre and Adult
  useEffect(() => {
    const list = movies.filter((movie) => {
      if (filters.genre === "all"){
        return movie
      } else {
        const genre = searchUtils.genres.find( genre => genre.name === filters.genre)
        if(genre){
          return movie.genre_ids.includes(genre.id)
        }
      }
    }).filter( (movie) => {
      if (filters.adult === "all"){
        return movie
      } else {
        return movie.adult === (filters.adult === 'true')
      }
    })

    dispatch({ type: ACTION_SET_FILTERED_MOVIES, payload: list})

  }, [filters.genre, filters.adult])

  // Sorts the results depending on the rating
  useEffect(() => {

    let list = [...filteredMovies]

    if(filters.rating === "1"){
      list = list.sort((a, b) => (a.vote_average - b.vote_average))
    } else {
      list = list.sort((a, b) => (b.vote_average - a.vote_average))
    }    

    dispatch({ type: ACTION_SET_FILTERED_MOVIES, payload: list})

  }, [filters.rating])

  // Sorts the results depending on the release date
  useEffect(() => {

    let list = [...filteredMovies]

    if(filters.relDate === "1"){
      list = list.sort((a, b) => (new Date(a.release_date) - new Date(b.release_date)))
    } else {
      list = list.sort((a, b) => (new Date(b.release_date) - new Date(a.release_date)))
    }

    dispatch({ type: ACTION_SET_FILTERED_MOVIES, payload: list})

  }, [filters.relDate])


  const loadMoreMovies = async() => {

    dispatch({ type: ACTION_SET_ISLOADING })
    
    const page = searchUtils.page + 1
    const {movies: newMovies} = await searchMovies(searchUtils.query, page)
    
    dispatch({ type: ACTION_GET_MOVIES, payload: [...movies, ...newMovies]})
    dispatch({ type: ACTION_SET_FILTERED_MOVIES, payload: [...filteredMovies, ...newMovies]})

    dispatch({ type: ACTION_SEARCH_UTILS, payload: {...searchUtils, page: page}})
  }

  return (
    <>
      {movies.length > 0 && (
        <div className="container my-4 mx-auto">
        <Accordion className='mx-2 mx-sm-3 mx-md-5'>
          <Accordion.Item eventKey="0" className='bg-dark'>
            <Accordion.Header>Filter / Sort Results</Accordion.Header>
            <Accordion.Body className='p-0'>
              <div className="container-fluid mt-4 mb-2">
                <div className="row row-cols-1 row-cols-lg-2">
                  <div className="col">
                    <div className="row row-cols-1 row-cols-md-2">
                      <div className="col hstack gap-2 mb-4">
                        <span className="fs-6">Genre</span>
                        <select
                          className="form-select"
                          name="genre"
                          value={filters.genre}
                          onChange={handleFilterChange}
                        >
                          <option value="all">All</option>
                          {searchUtils.genres.map( genre => (
                            <option key={genre.id} value={genre.name}>
                              {genre.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col hstack gap-2 mb-4">
                        <span className="fs-6">Adult</span>
                        <select
                          className="form-select"
                          name="adult"
                          value={filters.adult}
                          onChange={handleFilterChange}
                        >
                          <option value="all">All</option>
                          <option value="false">No</option>
                          <option value="true">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="row row row-cols-1 row-cols-md-2">
                      <div className="col hstack gap-2 ms-auto mb-4">
                        <span className="fs-6">Rating</span>
                        <select
                          className="form-select"
                          name="rating"
                          value={filters.rating}
                          onChange={handleFilterChange}
                        >
                          <option value="0" disabled>Default</option>
                          <option value="1">Ascending</option>
                          <option value="-1">Descending</option>
                        </select>
                      </div>

                      <div className="col hstack gap-2 mb-4">
                        <span className="fs-6">Rel.Date</span>
                        <select
                          className="form-select"
                          name="relDate"
                          value={filters.relDate}
                          onChange={handleFilterChange}
                        >
                          <option value="0" disabled>Default</option>
                          <option value="-1">Newest First</option>
                          <option value="1">Oldest First</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center mb-4 gap-5">
                <button
                  className="btn btn-outline-light"
                  onClick={() => clearFilters()}
                >
                  Clear Filters
                </button>
                <button
                  className="btn btn-outline-light"
                  onClick={() => {
                    dispatch({ type: ACTION_CLEAR_ALL })
                    clearFilters()
                    }
                  }
                >
                  Clear Search
                </button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

          <h3 className="text-center mt-4 fw-bold">SEARCH RESULTS</h3>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-4 gy-4 my-1 mx-1">
            
            {filteredMovies.map((movie) => (
              <div className='col px-2 px-sm-4 px-md-4' key={movie.id}>
               <MovieItem movie={movie} />
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredMovies.length === 0 && <p className='text-center fs-4'>No Movies Found based on this filter</p>}

      {(movies.length > 0 && !isLoading) && (
        <div className="mt-2 mb-5 text-center">
          <button
            className="btn btn-lg btn-success"
            onClick={loadMoreMovies}
          >
            Load More
          </button>
        </div>
      )}

      {isLoading && <Spinner />}
    </>
  )
}

export default MovieList