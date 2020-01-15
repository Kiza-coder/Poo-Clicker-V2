import React, {useState,useReducer,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Score from '../Score/Score';
import Board from '../Board/Board';
import Actions from '../Actions/Actions';

// Creating object
const initialState = {
    name: "AddClick",
    type: "upgradeClick",
    lvl: 1,
    cost: 10,
    increase: 2,
    length: 0,
    avaible: false,
}

const reducer = (state,action) =>{
    let result = state
    switch(action){
        case "avaible":
            result = {... state, avaible:true }
            return result
        case "level":
            result = {... state, lvl: state.lvl + 1}
            
    }
    console.log(result)
    return result 
}

const Game =() => {
// {# BASIC GAME FUCNTIONS #}
// Count the number of clicks
const [clickCounter, setClickCounter] = useState(0)
// Value of our click
const [clickValue, setClickValue] = useState(1)



// Add click function
const addClick=(clickValue) =>{
    // Etat counter + click
    setClickCounter(clickCounter+clickValue);
}
// {# ACTIONS FUCNTIONS #}
const [action,dispatch] = useReducer(reducer,initialState)

function payment() {
    setClickCounter(clickCounter-action.cost)
}

function levelup() {
    dispatch("level")
}

function bonusClickIncrease() {
    setClickValue(action.increase)
    payment()
    levelup()
}


useEffect(() => {
    console.log(clickCounter)
    if(clickCounter >= action.cost)
    {
        setTimeout(() => {
            dispatch('avaible')
            

        },0)
    }
   
},[clickCounter])


        return  (
                <div>
                    <Container fluid={true} className={'mb-4'}>
                        <Row>
                            <Col md={6}>
                                {/* nameOfTheFunction={paramOfTheBoard} */}
                                <Board addClick={addClick} clickValue={clickValue}/>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={12}>
                                        <Score score={clickCounter}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Actions action={action} clickIncrease={bonusClickIncrease}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                )
}  

export default Game;