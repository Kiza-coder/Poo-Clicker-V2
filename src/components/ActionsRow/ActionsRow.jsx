import React from 'react'
import ButtonAction from '../ButtonAction/ButtonAction'

// This component is for  map all objects on a  table
const ActionsRow = ({actionsRow, clickAction}) => {

    const handleClickAction = (id) => {
        clickAction(id)
    }

    return (    
            <div>
                <tr>
                    {actionsRow.slice(0,2).map((action) =>
                        <ButtonAction key={action.id} action={action} handleClickAction={handleClickAction}/>
                    )}
                </tr>
                <tr class="m-4">
                {actionsRow.slice(2,5).map((action) =>
                        <ButtonAction key={action.id} action={action} handleClickAction={handleClickAction}/>
                    )}
                </tr>
            </div>
    )
}

export default ActionsRow