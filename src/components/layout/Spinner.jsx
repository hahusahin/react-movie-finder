import React from 'react'
import spinner from '../layout/assets/spinner.gif'

function Spinner() {
  return (
    <div className='container text-center'>
      <img width='200' src={spinner} alt='Loading...'/>
    </div>
    
  )
}

export default Spinner