import React, {useState,useReducer,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Score from '../Score/Score';
import Board from '../Board/Board';
import Actions from '../Actions/Actions';

// Creating object
const initialState = {
    name: "AddClick",
    type: "upgradeClick",
    lvl: 0,
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
        case "disable":
            result = {... state, avaible:false }
            return result
        case "level":
            result = {... state, lvl: state.lvl + 1, increase: state.increase *2}
            return result        
    }

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
    payment()
    levelup()
    if (action.lvl === 0){
        setClickValue(2)
    }
    if (action.lvl === 1){
        setClickValue(4)
    }
    if (action.lvl === 2){
        setClickValue(8)
        console.log(clickValue)
        setTimeout(() => {
            dispatch("disable")
        },0)
    }
}


useEffect(() => {
    console.log(clickCounter)
    if(clickCounter >= action.cost && action.lvl===3)
    {
        setTimeout(() => {
            dispatch('avaible')
        },0)
    }
   
},[clickCounter])

useEffect(() => {
    console.log(action)
},[action])


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