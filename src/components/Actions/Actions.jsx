import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

import ActionsRow from '../ActionsRow/ActionsRow'

function Actions({action, clickIncrease, clickPackage,clickBonus}) {


// handle onCLick of the action and 
function handleClickAction(id){
    if(action[id].type === "upgradeClick")
    {
        clickIncrease(id)
    }
    if(action[id].type === 'packageClick')
    {
        clickPackage(id)
    }
    if(action[id].type === 'bonusClick')
    {
        clickBonus(id)
    }

    
}


    return (
        <div>
            <Container className={"boxAction rounded rounded-lg p-2 "}>
                <Row>
                    <Col md={12} className={"d-flex justify-content-center"}>
						<h1 class="title">Actions</h1>
					</Col>
                </Row>
                <Row className={"d-flex justify-content-center"}>
                    <Col className={"d-flex justify-content-center"}>
                        <ActionsRow actionsRow={action} clickAction={handleClickAction}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Actions