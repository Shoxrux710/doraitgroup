import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from '../../utils/axiosInterceptors'
import Account from './Account'

const AccountAll = () => {
    
    const [skip, setSkip] = useState(0)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState([])

    const accountUser = (skip) => {
        setLoading(true)
        axios.get(`/api/client/all?skip=${skip}&limit=8`)
              .then(response => {
                setAccount(response.data.users)
                setCount(response.data.userCount)
                setLoading(false)
              })  
    }

    const onDelete = (id) => {
        axios.delete(`/api/client/delete/${id}`)
              .then(response => {
                toast.success(response.data.successMessage)
                accountUser(skip)
              })  
    }

    useEffect(() => {
        accountUser(skip)
    }, [skip])

    return (
        <div>
            <Account
            setSkip={setSkip}
            count={count}
            account={account}
            loading={loading}
            onDelete={onDelete}
            />
        </div>
    )
}

export default AccountAll
