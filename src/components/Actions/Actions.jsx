import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

import ActionsRow from '../ActionsRow/ActionsRow'

function Actions({action, clickIncrease, clickPackage}) {


// handle onCLick of the action and 
function handleClickAction(id){
    if(action[id].type === "upgradeClick")
    {
        clickIncrease(id)
    }
    if(action[id].type == 'packageClick')
    {
        clickPackage(id)
    }
    
}


    return (
        <div>
            <Container className={"border border-dark boxAction"}>
                <Row>
                    <Col>
                    <Table>
                        <thead>
                            <tr>
                        <th>
                            Action Elements
                        </th>
                        </tr>
                        </thead>
                        <tbody>
                            <ActionsRow actionsRow={action} clickAction={handleClickAction}/>
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Actions