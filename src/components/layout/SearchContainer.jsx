import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import bgImage from '../../assets/title-background.jpg'
import MovieSearch from '../movies/MovieSearch'


function SearchContainer() {
  return (
    <Container fluid={true} className="position-relative px-0">
      <Image fluid={true} src={bgImage} alt="title" className='w-100 opacity-50' style={{height: "45vh"}} />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <h1 className='fw-bold'style={{ fontSize: "calc(1.5rem + 2.5vmin)" }}>Find Movies</h1>
        
        <MovieSearch />
        
      </div>
    </Container>
  )
}

export default SearchContainer