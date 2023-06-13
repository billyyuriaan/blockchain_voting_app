import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import '../assets/css/Home.css'

const Home = () => {
  return (
    <>
        <Container fluid>
            <Row className='justify-content-center mt-3 mb-3'>
                <Col md={6}>
                    <h1 className='text-center'>BlockchainBallot</h1><br />
                    <p className='text-center'>A <span id='blockballot'>Blockchain</span> solution to the insecurity of electoral voting system</p>
                </Col>
            </Row>
            <br /><br />
            <ListGroup horizontal={"xxl"} variant='flush' style={{backgroundColor : "green", color : "white"}} className='justify-content-between mt-4 mb-4'>
                <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Voting</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Balloting</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Security</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Blockchain</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Election</ListGroup.Item>
            </ListGroup>
            <br /><br /><br />
            <Row className='mt-4 mb-4'>
                <Col md={4}>
                    <h1>About BlockchainBallot</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a, facere laboriosam debitis labore vel error repellendus, voluptate delectus quasi asperiores architecto corrupti cum, pariatur quisquam corporis vitae ab beatae.</p>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    </>
  )
}

export default Home