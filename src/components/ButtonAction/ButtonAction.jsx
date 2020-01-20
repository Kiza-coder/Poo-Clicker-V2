

import React, {useReducer} from 'react'
import { Button } from 'react-bootstrap'

const initialState = {
    classname: "actionButton"
}

// {#-CLASSNAME REDUCER-#} handle the state of classe of the <td> element
const reducer = (state,action) =>{
    switch(action.type){
        case 'buttonDisabled':
            return {
                classname: "actionButton buttonDisabled" 
            }
        case 'buttonAvaible':
            return {
                classname: "actionButton buttonAvaible" 
            }
        case 'buttonClick':
            return {
                classname: "actionButton buttonClick" 
            }
        case 'buttonHoover':
            return {
                classname: "actionButton buttonHoover" 
            }
        default:
            return state
    }
}

function ButtonAction({action, handleClickAction}) {
    
const [classname,dispatch] = useReducer(reducer,initialState)


// {#-BUTTON EVENTS-#}
// Click Button Event
const handleButtonMouseClick = () => {
    dispatch({type:'buttonClick'})
    handleClickAction(action.id)
}

// Hoover Button Event
const handleButtonMouseHoover = () => {
    dispatch({type:'buttonHoover'})
}

// Mouse-out Button Event
const handleButtonMouseOut = () => {
    dispatch({type:'buttonAvaible'})
}

    return (
            <td className={classname.classname} onClick={handleButtonMouseClick} onMouseOver={handleButtonMouseHoover} onMouseOut={handleButtonMouseOut}>{action.name}</td> 
    )
}

export default ButtonAction
