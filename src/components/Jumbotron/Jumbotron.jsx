import React from 'react';

import { Jumbotron, Col } from 'react-bootstrap';


const JumbotronHeader =() => {
    
        return  (
                <Jumbotron fluid={true} className={"mb-3"} class="jumbotron">
                    <Col className={'pb-5 text-center d-flex justify-content-center'}>
                        <div className={"text-center jumbotronTitle"}>
                            <h1>
                                <span>P</span>
                                <span>o</span>
                                <span>o</span>
                                <span>-</span>
                                <span>  </span>
                                <span>C</span>
                                <span>l</span>
                                <span>i</span>
                                <span>c</span>
                                <span>k</span>
                                <span>e</span>
                                <span>r</span>
                                <span>  </span>
                                <span>V</span>
                                <span>.</span>
                                <span>2</span>
                            </h1>
                        </div>     
                    </Col>
                </Jumbotron>
                )
}  

export default JumbotronHeader;