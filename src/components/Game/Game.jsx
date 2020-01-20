import React, {useState,useReducer,useEffect,useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Score from '../Score/Score';
import Board from '../Board/Board';
import Actions from '../Actions/Actions';
import { clear } from 'sisteransi';

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
        time: 0,
        avaible: false
    },
    {
        id:1,
        name: "Mouse",
        type: "packageClick",
        lvl: 0,
        cost: 10,
        increase: 0,
        time: 5000,
        length: 0,
        avaible: false
    }
]

const initialStateInterval = []




// function reducer for state of the Actions's grid
const reducer = (state,action) =>{
    let new_state = [...state]
    switch(action.type){
        case "avaible":
            new_state[action.index].avaible = true
            return new_state
        case "disabled":
            new_state[action.index].avaible = false
            return new_state
        case "level-upgradeClick":
            new_state[action.index].lvl = new_state[action.index].lvl +1
            return new_state
        case 'level-packageClick':
            new_state[action.index].lvl = new_state[action.index].lvl+1
            new_state[action.index].increase = new_state[action.index].increase + 15
            return new_state     
    }

}

const reducerInterval = (state,action) =>{
    let new_state = [...state]
    switch(action.type){
        case "time":
            new_state.push({idAction:action.actionId, idInterval:action.intervalId})
            return new_state
    }
}

const Game =() => {


// {# BASIC GAME FUNCTIONS #}
// Count the number of clicks
const [clickCounter, setClickCounter] = useState(0)
// Value of our click
const [clickValue, setClickValue] = useState(1)

// Use ref Bind to my CLickCounter
const myRef = useRef(null)
myRef.current = (increase) => {
    setClickCounter(clickCounter + increase)
}

// Add click function
const addClick = (clickValue) =>{
    // Etat counter + click
    setClickCounter(clickCounter+clickValue);
}
// {# ACTIONS FUCNTIONS #}
const [action,dispatch] = useReducer(reducer,JSON.parse(JSON.stringify(initialState)))

const [tabInterval, dispatchInterval] = useReducer(reducerInterval,initialStateInterval)


//function who return a boolean 'true' if the paiement is possible
function payment(id) {
    if(clickCounter-action[id].cost>=0)
    {
        setClickCounter(clickCounter-action[id].cost)
        return true
    }
    else{
        return false
    }
}


//function who increase the lvl of the actions
function levelup(id) {
    if(action[id].lvl !== 3){
        dispatch({type:"level-upgradeClick",index:id})
        if(action[id].type === "packageClick")
        {
            dispatch({type: "level-packageClick",index:id})
        }
    }
}



// function who handled the behaviour of bonus and set the paiement and the lvl up
function bonusClickIncrease(id) {  
    if(payment(id)){
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
}




// Function who handle the behaviour  of the  package of click bonus
const bonusClickPackage = (id) => {
    if(payment(id)){
        levelup(id)
        if (action[id].lvl === 0){
            let intervalId = setInterval(() => {
                setClickCounter( clickCounter => clickCounter + action[id].increase)
            },action[id].time)
            dispatchInterval({type:"time", intervalId:intervalId ,actionId: id})
    
        }
        if (action[id].lvl === 1){
            tabInterval.forEach((element) => {
                console.log(element)
                if(element.actionId === id)
                {
                    console.log("erase")
                    element.actionId.clearInterval()
                }
            })
            let intervalId = setInterval(() => {
                setClickCounter( clickCounter => clickCounter + action[id].increase)
            },action[id].time)
            setTimeout(()=> {
                dispatchInterval({type:"time", intervalId :intervalId ,actionId: id})
                dispatch({type:"disabled", index:id})
            },action[id].time+1000)
        }
        if(action[id].lvl === 2){
            tabInterval.forEach((element) => {
                if(element.actionId === id)
                {
                    console.log("erase")
                    element.actionId.clearInterval()
                }
            })
            setInterval(() => {
                setClickCounter( clickCounter => clickCounter + action[id].increase)
            },action[id].time)
            setTimeout(() => {
                dispatch({type:"disabled", index:id})
            },0)
        }
    }
}





// useEffect each time the table of action is modified, he will check if there is more modification to do
useEffect(() => {
    console.log("OK")
    action.forEach((element,index) => {
            if(clickCounter >= element.cost && element.lvl !== 3)
            {
                setTimeout(() => {
                    dispatch({type:"avaible", index:index })
                },0)
            }  
    })
    console.log(tabInterval)      
},[clickCounter])






        return(
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
                                        <Actions action={action} clickIncrease={bonusClickIncrease} clickPackage={bonusClickPackage}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                )
}
export default Game
