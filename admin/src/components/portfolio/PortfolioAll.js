import React, { useState, useEffect } from 'react'
import Portfolio from './Portfolio'
import axios from '../../utils/axiosInterceptors'
import { toast } from 'react-toastify'

const PortfolioAll = (props) => {

    const [port, setPort] = useState([])

    const portProduct = () => {
        axios.get(`/api/port/all`)
              .then(response => {
                setPort(response.data.user)
              })  
    }

    const deleteOne = (id) => {
        axios.delete(`/api/port/delete/${id}`)
              .then(response => {
                toast.success(response.data.successMessage)
                portProduct()
              }).catch(err => {
                toast.error(err.response.data.errorMessage)
              })  
    }

    useEffect(() => {
        portProduct()
    },[])


    return (
        <div>
            <Portfolio
            port={port}
            deleteOne={deleteOne}
            id={props.match.params.id}
            portProduct={portProduct}
            />
        </div>
    )
}

export default PortfolioAll
