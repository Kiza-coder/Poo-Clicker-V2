import React from 'react'
import ButtonAction from '../ButtonAction/ButtonAction'

import {Row, Col} from 'react-bootstrap'

// This component is for  map all objects on a  table
const ActionsRow = ({actionsRow, clickAction}) => {

    const handleClickAction = (id) => {
        clickAction(id)
    }

    return (    
            <div className={''}>
                <Row class="d-flex justify-content-center">
                    {actionsRow.slice(0,2).map((action) =>
                        <ButtonAction key={action.id} action={action} handleClickAction={handleClickAction}/>
                    )}
                </Row>
                <Row class="d-flex justify-content-center">
                    {actionsRow.slice(2,5).map((action) =>
                        <ButtonAction key={action.id} action={action} handleClickAction={handleClickAction}/>
                    )} 
                </Row>
            </div>
    )
}

export default ActionsRow