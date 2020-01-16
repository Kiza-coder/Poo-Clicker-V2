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
						<img src={process.env.PUBLIC_URL + '/assets/img/poops/poop.png'}></img>
					</div>
				    </Col>
			    </Row>
			    </Container>
		</div>
		)
}

export default Board;