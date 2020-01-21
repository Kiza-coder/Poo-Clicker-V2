import React, {useState,useEffect} from 'react';
import posed from 'react-pose';

import { Container, Row, Col } from 'react-bootstrap';

const Box = posed.div({
	hidden: { opacity: 0 },
	visible: { opacity: 1 }
	})

const Board =({addClick, clickValue}) => {
const[isVisible,setIsVisible] = useState(true)



const handleClick=() =>{
	addClick(clickValue)
}
	return  (
		<div>
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
			    </Container>
		</div>
		)
}

export default Board;