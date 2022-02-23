import React, { useContext, useState } from 'react'
import { searchMovies } from '../../API'
import { ACTION_GET_MOVIES, ACTION_SEARCH_UTILS, ACTION_SET_FILTERED_MOVIES, ACTION_SET_ISLOADING } from '../../config'
import MovieDBContext from '../../context/moviedb/MovieDBContext'


function MovieSearch() {

  const [text, setText] = useState("")
  const {dispatch} = useContext(MovieDBContext)

  const handleChange = (event) => setText(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    dispatch({ type: ACTION_SET_ISLOADING })

    const {movies, genres} = await searchMovies(text, 1)

    dispatch({ type: ACTION_GET_MOVIES, payload: movies })
    dispatch({ type: ACTION_SET_FILTERED_MOVIES, payload: movies })
    dispatch({ type: ACTION_SEARCH_UTILS, payload: {query: text, page: 1, genres: genres}})

    setText("")    
  }

  return (
    <>
      <form className='row d-flex gap-4 gap-md-0 mt-4 justify-content-center' onSubmit={handleSubmit}>
        <div className="col">
          <input 
            className='form-control form-control-lg'
            type="search"
            placeholder="Search"
            onChange={handleChange}
            value={text}
            style={{ "minWidth": "15rem" }}
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-lg btn-warning" disabled={text.length < 3}>Search</button>
        </div>
      </form>
    </>
  )
}

export default MovieSearch