import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import '../assets/css/Home.css'
import BallotIMG from "../assets/blockchanihelpovrban.jpg"

const Home = () => {
  return (
    <>
        <Container fluid>
            <br />
            <Row className='justify-content-center mt-3 mb-3'>
                <Col md={6}>
                    <h1 className='text-center'>BlockchainBallot</h1><br />
                    <p className='text-center'>A <span id='blockballot'>Blockchain</span> solution to the insecurity of electoral voting system</p>
                </Col>
            </Row>
            <br /><br />
            <Row>
                <ListGroup horizontal={"xl"} variant='flush' style={{backgroundColor : "green", color : "white"}} className='justify-content-between mt-4 mb-4'>
                    <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Voting</ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Balloting</ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Security</ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Blockchain</ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor : "green", color : "white"}}>Election</ListGroup.Item>
                </ListGroup>
            </Row>            
            <br /><br /><br />
            <Row className='mt-4 mb-4'>
                <Col md={4}>
                    <h1 className='text-center'>About BlockchainBallot</h1>
                    <br />
                    <p className='text-center'>BlockchainBallot is a voting system that uses blockchain technology to ensure the security and transparency of the voting process. Blockchain technology is a distributed database that is append-only, meaning that data can only be added to the end of the database and never removed. This makes it an ideal technology for voting systems, as it ensures that votes cannot be tampered with or altered after they have been cast.</p>
                </Col>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    <img src={BallotIMG} alt="Iamge" loading='lazy' width={400} height={200} />
                </Col>
            </Row>
            <br />
            <Row className='mt-4 mb-4'>
                <Col md={4}>
                    <img src={BallotIMG} alt="Iamge" loading='lazy' width={400} height={200} />
                </Col>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    <h1 className='text-center'>Why BlockchainBallot</h1>
                    <br />
                    <p className='text-center'>in the context of voting, this means that the voting records are stored on a distributed ledger that is maintained by multiple participants, making it difficult or impossible to change, hack, or cheat the system
. Each vote is recorded as a block in the chain, and every time a new vote occurs, a record of that vote is added to every participant's ledger
. This ensures that the voting process is transparent and tamper-proof. BlockchainBallot offers an alternative to traditional voting systems that are vulnerable to fraud and manipulation. With BlockchainBallot, voters can be confident that their vote is secure and that the results of the election are accurate.</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Home