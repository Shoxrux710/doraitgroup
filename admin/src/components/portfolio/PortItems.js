import React from 'react'
import './portitems.css'
import Port from './Port'

const PortItems = (props) => {

    const {port, deleteOne} = props



    return (
        <div className="portitems">
                    {
                        port.map((items) => {
                            return (
                              <Port {...items} key={items._id} deleteOne={deleteOne} />
                            )
                        })
                    }
        </div>
    )
}

export default PortItems
