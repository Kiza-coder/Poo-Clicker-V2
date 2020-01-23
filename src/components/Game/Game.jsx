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
        name: "bonus",
        type: "bonusClick",
        lvl: 0,
        cost: 7,
        increase: 150,
        time: 6000,
        factor: 0,
        avaible: false,
        bonus: false
    },
    {
        id:2,
        name: "Mouse",
        type: "packageClick",
        lvl: 0,
        cost: 10,
        increase: 0,
        time: 2000,
        factor: 1,
        avaible: false
    },
    {
        id:3,
        name: "Cat",
        type: "packageClick",
        lvl: 0,
        cost: 20,
        increase: 0,
        time: 2000,
        factor: 2,
        avaible: false
    },
    {
        id:4,
        name: "Cow",
        type: "packageClick",
        lvl: 0,
        cost: 40,
        increase: 0,
        time: 2000,
        factor: 4,
        avaible: false
    },
]





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
            new_state[action.index].increase = new_state[action.index].increase + 5*action.factor
            new_state[action.index].cost = new_state[action.index].cost*3
            
            return new_state

        case "level-bonusClick":
            new_state[action.index].bonus = action.activate
            return new_state

        default:
            return initialState     
    }

}


const Game =() => {


// {# BASIC GAME FUNCTIONS #}
// Count the number of clicks
const [clickCounter, setClickCounter] = useState(0)
// Value of our click
const [clickValue, setClickValue] = useState(1)


// Use ref Bind to my CLickCounter

// Add click function
const addClick = (clickValue) =>{
    // Etat counter + click
    setClickCounter(clickCounter+clickValue);
}
// {# ACTIONS FUCNTIONS #}
const [action,dispatch] = useReducer(reducer,JSON.parse(JSON.stringify(initialState)))



//function who return a boolean 'true' if the paiement is possible
function payment(id) {
    if(action[id].avaible === true){
        if(clickCounter-action[id].cost>=0)
    {
        setClickCounter(clickCounter-action[id].cost)
        return true
    }
    else{
        return false
    }
    }
    
}


//function who increase the lvl of the actions
function levelup(id) {
    if(action[id].lvl !== 3){
        if(action[id].type === "upgradeClick")
        {
            dispatch({type:"level-upgradeClick",index:id})
        }
        if(action[id].type === "packageClick")
        {
            dispatch({type: "level-packageClick",index:id, factor:action[id].factor})
        }
        if(action[id].type === "bonusClick")
        {
            dispatch({type: "level-bonusClick",index:id, activate:true})
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

// Stock all the setInterval  who is linked to the action with type ""
useEffect(() => {
        let mouse = setInterval(() =>{
            setClickCounter(clickCounter  => clickCounter + action[2].increase)
        },action[2].time)
        let cat = setInterval(() =>{
            setClickCounter(clickCounter  => clickCounter + action[3].increase)
        },action[3].time)
        let cow = setInterval(() =>{
            setClickCounter(clickCounter  => clickCounter + action[4].increase)
        },action[4].time)
},[])


// Function who handle the behaviour  of the  package of click bonus
const bonusClickPackage = (id) => {
    if(payment(id)){
        levelup(id)
        if(action[id].lvl === 2){
            dispatch({ type:"disabled",index:id })
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



const bonusClick = (id) => {
    console.log("BOnusok")
    if(payment(id)){
        levelup(id)
        if(action[id].lvl === 2){
            dispatch({ type:"disabled",index:id })
        }
    }  
}


useEffect(() => {
    if(action[4].bonus === true)
    {
        let previousState = clickValue
        setClickValue(action[4].increase)
        setTimeout(()=>{
            setClickValue(previousState)
        },action[4].time)
        dispatch({type: "level-bonusClick",index:4, activate:false})
    }
},[action])






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
                                        <Actions action={action} clickBonus={bonusClick} clickIncrease={bonusClickIncrease} clickPackage={bonusClickPackage}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                )
}
export default Game
