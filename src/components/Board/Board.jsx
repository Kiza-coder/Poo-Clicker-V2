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
                                        <div className={"d-flex justify-content-around"} class="pooButton" onClick={handleClick}>
                                                <img src="https://png2.cleanpng.com/sh/99fa4b8279626b211e1abb350241b1d0/L0KzQYm3U8IxN6ttj5H0aYP2gLBuTgBqdJYyh9g2cHByPbb0jBpqNZdqe9d8LYSwg7nwkwQue6Vue91ucj3zf7F3TgBvb15qhdHzaT3sg73ojvQuPZJnSdU6ZULlcoi5gcMvQGc9UasAOEi0RYO4Vck5QWU7T6gCOD7zfri=/kisspng-pile-of-poo-emoji-feces-t-shirt-sticker-poop-png-emoji-island-5ab1c1e2bb72a3.8689958815215989467678.png"></img>
                                        </div>
                                    </Col>
                            </Row>
                    </Container>
                </div>
                )
}  

export default Board;