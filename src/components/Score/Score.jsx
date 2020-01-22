import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

function Score({score}) {

    return (
        <div>
            <Container className={"boxScore rounded rounded-lg mb-2"}>
                <Row>
                    <Col md={12} className={"d-flex justify-content-center p-4"}>
                        <h3 class="scoreTitle d-flex justify-content-center">score: <span>{score} 💩</span></h3>  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Score
