import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

function Score({score}) {

    return (
        <div>
            <Container className={"boxScore rounded rounded-lg p-2 mb-2 mt-2"}>
                <Row>
                    <Col md={12} className={"d-flex justify-content-center"}>
                        <h3 class="title d-flex justify-content-center">score: {score} 💩</h3>  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Score
