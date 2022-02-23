import React, { useContext, useEffect, useState } from "react";
import { getGenres } from "../../API";
import { ACTION_SEARCH_UTILS } from "../../config";
import MovieDBContext from "../../context/moviedb/MovieDBContext";

function FilterPanel({filterMovies}) {

  const {searchUtils, dispatch} = useContext(MovieDBContext)

  const [genresLoading, setGenresLoading] = useState(true)

  const [filters, setFilters] = useState({ genre: "all", adult: "all", rating: 0, relDate: 0 })

  useEffect(() => {

    const fetchGenres = async() => {
      const genres = await getGenres()
      dispatch({ type: ACTION_SEARCH_UTILS, payload: {...searchUtils, genres: genres} })
      if(genres){
        setGenresLoading(false)
      }
    }

    fetchGenres()
  }, [])


  // useEffect(() => {
  //   const genres = searchUtils.genres.map( genre => genre.id)
  //   console.log(genres)
  // }, [filters])

  //   // movies.filter( movie => {

  //   //   movie.genre_ids.findIndex( genre =>  )




  const handleFilterChange = (event) => {
    const {target} = event

    setFilters((currentState) => {
      return {...currentState, [target.name]: target.value }
    })
  }

  const clearFilters = () => {
    setFilters({ genre: "all", adult: "all", rating: 0, relDate: 0 })
  }


  return (
    <>
      <h4 className="text-center my-2">Filter / Sort Results</h4>
      <div className="container-fluid mt-4 mb-2">
        <div className="row row-cols-1 row-cols-lg-2">

          <div className="col">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col hstack gap-2 mb-4">
                <span className="fs-6">Genre</span>
                <select className="form-select" name="genre" value={filters.genre} onChange={handleFilterChange}>
                  <option value="all">All</option>
                  {!genresLoading && searchUtils.genres.map((genre) => (
                    <option key={genre.id} value={genre.name}>{genre.name}</option>
                  ))}
                </select>
              </div>

              <div className="col hstack gap-2 mb-4">
                <span className="fs-6">Adult</span>
                <select className="form-select" name="adult" value={filters.adult} onChange={handleFilterChange}>
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
                <select className="form-select" name="rating" value={filters.rating} onChange={handleFilterChange}>
                  <option value="0">Default</option>
                  <option value="1">Ascending</option>
                  <option value="-1">Descending</option>
                </select>
              </div>

              <div className="col hstack gap-2 mb-4">
                <span className="fs-6">Rel.Date</span>
                <select className="form-select" name="relDate" value={filters.relDate} onChange={handleFilterChange}>
                  <option value="0">Default</option>
                  <option value="1">Ascending</option>
                  <option value="-1">Descending</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="d-flex justify-content-center mb-4 gap-5">
      <button
          className='btn btn-outline-light'
          onClick={() => clearFilters()}
        >
          Clear Filter
        </button>
        <button
          className='btn btn-outline-light'
        >
          Clear Search
        </button>
      </div>
    </>
  );
}

export default FilterPanel;
