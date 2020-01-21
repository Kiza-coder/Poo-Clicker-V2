import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

function Score({score}) {

    return (
        <div>
            <Container className={"border border-dark"}>
                <Row>
                    <Col md={12} className={"d-flex justify-content-left"}>
                        <h1>Score Container</h1>      
                    </Col>   
                </Row>
                <Row>
                    <Col md={12} className={"d-flex justify-content-center"}>
                        <h3>score: <span class="scoreTitle">{score} 💩</span></h3>  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Score
