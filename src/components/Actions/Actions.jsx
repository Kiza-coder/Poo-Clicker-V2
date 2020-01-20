import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ButtonAction from '../ButtonAction/ButtonAction'

function Actions({action, clickIncrease}) {

function handleClickAction(id){
    clickIncrease(id)
}


    return (
        <div>
            <Container className={"border border-dark"}>
                <Row>
                    <Col>
                        <h1>Actions Container</h1>
                        <ButtonAction action={action} handleClickAction={handleClickAction}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Actions