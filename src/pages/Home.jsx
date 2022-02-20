import React, { useContext } from 'react'
import SearchContainer from '../components/layout/SearchContainer'
import MovieDBContext from '../context/moviedb/MovieDBContext'
import MovieList from '../components/movies/MovieList'


function Home() {

  const {isSubmitted} = useContext(MovieDBContext)


  return (
    <>
      <SearchContainer />
      {isSubmitted && <MovieList /> }
    </>
  )
}

export default Home