import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <>
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                <h1 className='text-center'>BlockchainBallot</h1><br />
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita quae at ipsum eos nulla temporibus quo a doloribus et, quaerat vitae debitis reiciendis deleniti quibusdam consequuntur odio repudiandae aliquam!</p>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default About