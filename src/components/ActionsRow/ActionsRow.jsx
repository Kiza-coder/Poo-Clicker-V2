import React from 'react'
import ButtonAction from '../ButtonAction/ButtonAction'


// This component is for  map all objects on a  table
const ActionsRow = ({actionsRow, clickAction}) => {

    const handleClickAction = (id) => {
        clickAction(id)
    }

    return (
        <tr>
            {actionsRow.map((action,index) =>
            <ButtonAction key={action.id} action={action} handleClickAction={handleClickAction}/>
            )}
        </tr>
        
    )
}

export default ActionsRow