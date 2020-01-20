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
        time: 0,
        avaible: false
    },
    {
        id:1,
        name: "Mouse",
        type: "packageClick",
        lvl: 0,
        cost: 10,
        increase: 20,
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
        case "level":
            new_state[action.index].lvl = new_state[action.index].lvl +1
            return new_state        
    }

}

const reducerInterval = (state,action) =>{
    const new_state = [...state]
    switch(action.type){
        case "time":

            new_state[action.id]= action.intervalId
            return new_state
    }
}

const Game =() => {


// {# BASIC GAME FUNCTIONS #}
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
        dispatch({type:"level",index:id})
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

// function who handled the behaviour of bonus and set the paiement and the lvl up
const interval = (clickCounter) => {
    setInterval((clickCounter) => {
        setClickCounter(clickCounter+1)
        console.log("3sec")
        console.log("suite")
        console.log(clickCounter)
    },3000)
}


const bonusClickPackage = (id) => {
    if(payment(id)){
        levelup(id)
        if (action[id].lvl === 0){
            interval(clickCounter)
            setTimeout(()=> {
                console.log('TimeoutDispatch')
                dispatchInterval({type:"time", intervalId : 2})
            },action[id].time+100)
        }

        if (action[id].lvl === 1){
        }
        if (action[id].lvl === 2){
            setTimeout(() => {
                dispatch({type:"disabled", index:id})
            },0)
        }
    }
}





// useEffect each time the table of action is modified, he will check if there is more modification to do
useEffect(() => {
    action.forEach((element,index) => {
            if(clickCounter >= element.cost && element.lvl !== 3)
            {
                setTimeout(() => {
                    dispatch({type:"avaible", index:index })
                },0)
            }
       
    })      
},[clickCounter])

useEffect(()=> {

}
,[])






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
