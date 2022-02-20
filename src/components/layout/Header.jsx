import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { SiThemoviedatabase } from "react-icons/si"
import { Link } from "react-router-dom"

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="py-3">
      <Container>
        <Link to="/" className="navbar-brand">
          <SiThemoviedatabase className="fs-1 me-2" />
          Movie Finder
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-3 gap-md-5 fs-5 mt-2">
            <Link to="/" className="text-decoration-none text-light text-center">Home</Link>
            <Link to="/about" className="text-decoration-none text-light text-center">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
