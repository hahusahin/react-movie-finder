import React from 'react'

function About() {
  return (
    <div className='container mt-4'>
      <h2 className='mb-4 fw-bold'>About This Project</h2>
      <p className='mb-4'>
        A React app to search for a movie and view movie details.<br/>
        All the images and information are taken from <a href="https://www.themoviedb.org/">The Movie Database</a> using its API.<br/>
        Tools that are used in this project are:
      </p>
      <ul className='ms-3'>
        <li>React Components / Props</li>
        <li>useState Hook</li>
        <li>Router (react-router-dom v6)</li>
        <li>Context API (useContext Hook)</li>
        <li>Reducers (useReducer Hook)</li>
        <li>useEffect Hook</li>
        <br />
        <li>Bootstrap 5</li>
        <li>Axios</li>
        <li>The Movie Database API</li>
      </ul>
    </div>
  )
}

export default About