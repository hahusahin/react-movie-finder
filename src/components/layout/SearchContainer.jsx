import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import bgImage from '../../assets/title-background.jpg'
import MovieDBContext from '../../context/moviedb/MovieDBContext'
import MovieSearch from '../movies/MovieSearch'


function SearchContainer() {

  const {movies} = useContext(MovieDBContext)

  return (
    <>
      <Container fluid={true} className="position-relative px-0">
        <Image fluid={true} src={bgImage} alt="title" className='w-100' 
              style={{height: movies.length > 0 ? "35vh" : "65vh", opacity: "30%"}} />
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h1 className='fw-bold'style={{ fontSize: "calc(1.5rem + 2.5vmin)" }}>Find Movies</h1>
          
          <MovieSearch />
          
        </div>
      </Container>
    </>
  )
}

export default SearchContainer