import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

const Board =({addClick, clickValue}) => {
const handleClick=() =>{
        addClick(clickValue)
}
        return  (
                <div>
                    <Container className={"border border-dark"}>
                            <Row>
                                    <Col md={12} className={"d-flex justify-content-center"}>
                                        <h1>Board Container</h1>      
                                    </Col>   
                            </Row>
                            <Row>
                                    <Col md={12} className={"d-flex justify-content-center"}>
                                        <Button onClick={handleClick}></Button>
                                    </Col>
                            </Row>
                    </Container>
                </div>
                )
}  

export default Board;