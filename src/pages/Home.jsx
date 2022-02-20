import React, { useContext, useEffect } from 'react'
import SearchContainer from '../components/layout/SearchContainer'
import MovieDBContext from '../context/moviedb/MovieDBContext'
import MovieList from '../components/movies/MovieList'
import { ACTION_CLEAR_ALL } from "../config"

function Home() {

  const {isSubmitted, dispatch} = useContext(MovieDBContext)

  // useEffect(()=> {

  //   dispatch({ type: ACTION_CLEAR_ALL })

  // }, [dispatch])


  return (
    <>
      <SearchContainer />
      {isSubmitted && <MovieList /> }
    </>
  )
}

export default Home