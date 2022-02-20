import React, { useContext } from 'react'
import MovieDBContext from '../../context/moviedb/MovieDBContext'
import SearchResItem from './SearchResItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from '../layout/Spinner'

function SearchList() {

  const {movies, isLoading} = useContext(MovieDBContext)

  if(!isLoading){
    return (
      <Container className='my-5 px-5' style={{maxWidth: "800px" , margin: "0 auto"}}>
        <h1 className='mb-5 text-center fw-bold'>SEARCH RESULTS</h1>
        <Row xs={1} className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id}>
              <SearchResItem movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  } else {
    return <Spinner />
  }
}

export default SearchList