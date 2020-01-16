import React from 'react';

import { Jumbotron, Col } from 'react-bootstrap';

const JumbotronHeader =() => {
        return  (
                <Jumbotron fluid={true} className={'mb-4'} class="jumbotron">
                    <Col className={'pb-5 text-center justify-content-center align-items-center'}>
                        <h1 className={"text-center"}>API V2</h1>     
                    </Col>
                </Jumbotron>
                )
}  

export default JumbotronHeader;