import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbars = () => {
  return (
        <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
            <Navbar.Brand href="/">BlockchainBallot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='justify-content-end'>
            <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
    )
}

export default Navbars