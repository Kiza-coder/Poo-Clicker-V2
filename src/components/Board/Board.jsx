import React, {useState,useEffect} from 'react';
import posed from 'react-pose';

import { Container, Row, Col } from 'react-bootstrap';

const Box = posed.div({
	pressable: true,
  	init: { scale: 1 , x: 0, y: 0, rotateY: 0, rotateX: 0},
  	press: { scale: 1.2 , x: +5, y: -20, rotateY: 45, rotateX: 1}
	})

const Board =({addClick, clickValue}) => {
<<<<<<< HEAD
const[isVisible,setIsVisible] = useState(true)



=======
>>>>>>> mat
const handleClick=() =>{
	addClick(clickValue)
}
	return  (
		<div>
<<<<<<< HEAD
			    <Container className={""}>
			    <Row>
				    <Col md={12} className={"d-flex justify-content-center"}>
					<h1>Board Container</h1>
				    </Col>
			    </Row>
			    <Row>
				    <Col md={12} className={"d-flex justify-content-center"}>
					<div className={"d-flex justify-content-around"} class="pooButton" onClick={handleClick}>
						<img src={process.env.PUBLIC_URL + '/assets/img/poops/poop.png'} alt="The poo"></img>
					</div>
					
				    </Col>
			    </Row>
=======
			    <Container className={"boxGame rounded rounded-lg p-2"}>
					<Row>
						<Col md={12} className={"d-flex justify-content-center"}>
						<h1 class="title">👇 Pick up the Poo! 👇</h1>
						</Col>
					</Row>
					<Row>
						<Col md={12} className={"d-flex justify-content-center mt-5 pt-5"}>
							<Box className="">
								<div id="beep" className={"d-flex justify-content-center"} class="pooButton" onClick={handleClick}>
									<img alt="" src={process.env.PUBLIC_URL + '/assets/img/poops/poop.png'}/>
								</div>
							</Box>
						</Col>
					</Row>
>>>>>>> mat
			    </Container>
		</div>
		)
}

export default Board;