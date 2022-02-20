import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { SiThemoviedatabase } from "react-icons/si"

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="py-3">
      <Container>
        <Navbar.Brand href="/">
          <SiThemoviedatabase className="fs-1 me-2" />
          Movie Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-md-4 fs-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
