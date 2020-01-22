import React, {useState,useEffect} from 'react';
import posed from 'react-pose';

import { Container, Row, Col } from 'react-bootstrap';

const Box = posed.div({
	pressable: true,
  	init: { scale: 1 , x: 0, y: 0, rotateY: 0, rotateX: 0},
  	press: { scale: 1.2 , x: +5, y: -20, rotateY: 45, rotateX: 1}
	})

const Board =({addClick, clickValue}) => {
const handleClick=() =>{
	addClick(clickValue)
}
	return  (
		<div>
			    <Container className={"boxGame rounded rounded-lg p-2"}>
					<Row>
						<Col md={12} className={"d-flex justify-content-center"}>
						<h1 class="title">👇 Click Me! 👇</h1>
						</Col>
					</Row>
					<Row>
						<Col md={12} className={"d-flex justify-content-center mt-5 pt-5"}>
							<Box className="">
								<div className={"d-flex justify-content-center"} class="pooButton" onClick={handleClick}>
									<img src={process.env.PUBLIC_URL + '/assets/img/poops/poop.png'}></img>
								</div>
							</Box>
						</Col>
					</Row>
			    </Container>
		</div>
		)
}

export default Board;