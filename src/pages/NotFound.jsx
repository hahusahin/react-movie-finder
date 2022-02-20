import React from "react"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="container text-center my-auto">
      <h1 className="mb-4 fw-bold" style={{fontSize:"5rem"}}>OOPS!</h1>
      <p className="mb-5 fs-2 fw-bold">404 - Page Not Found!</p>
      <Link to="/" className="btn btn-primary btn-lg">Back To Home</Link>
    </div>
  )
}

export default NotFound
