import React, {useState,useReducer,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Score from '../Score/Score';
import Board from '../Board/Board';
import Actions from '../Actions/Actions';

// Creating object
const initialState = [
    {
        id: 0,
        name: "AddClick",
        type: "upgradeClick",
        lvl: 0,
        cost: 10,
        increase: 2,
        length: 0,
        avaible: false
    },
    {
        id:1,
        name: "Mouse",
        type: "packageClick",
        lvl: 0,
        cost: 10,
        increase: 2,
        length: 0,
        avaible: false
    }
]

const reducer = (state,action) =>{
    switch(action.type){
        case "avaible":
            new_state[action.index].avaible = true
            return new_state
        case "disabled":
            new_state[action.index].avaible = false
            return new_state
        case "level":
            new_state[action.index].lvl = new_state[action.index].lvl +1
            return new_state        
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
const [action,dispatch] = useReducer(reducer,JSON.parse(JSON.stringify(initialState)))

function payment(id) {
    if(clickCounter-action[id].cost>=0)
    {
        setClickCounter(clickCounter-action[id].cost)
    }
}

function levelup(id) {
    if(action[id].lvl !== 3){
        dispatch("level")
    }
}

function bonusClickIncrease(id) {   
    console.log("Bonus :" , action[id])
    payment(id)
    levelup(id)
    if (action[id].lvl === 0){
        setClickValue(2)
    }
    if (action[id].lvl === 1){
        setClickValue(4)
    }
    if (action[id].lvl === 2){
        setClickValue(8)
        setTimeout(() => {
            dispatch({type:"disabled", index:id})
        },0)
    }
}


useEffect(() => {
    action.forEach((element,index) => {
        console.log(element)
        if(clickCounter >= element.cost && element.lvl !== 3)
    {
        setTimeout(() => {
            dispatch({type:"avaible", index:'index' })
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
                                        <Actions action={action[0]} clickIncrease={bonusClickIncrease}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                )
}  

export default Game;