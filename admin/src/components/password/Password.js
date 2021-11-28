import React, { useState } from 'react'
import axios from '../../utils/axiosInterceptors'
import { toast } from 'react-toastify'
import { userInform } from '../../redux/action/userAction'
import { useDispatch } from 'react-redux'
import '../login/login.css'

const Password = () => {

    const [email, setEmail] = useState("")

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
      
        const user = {
            email,
        }
        axios.post('/api/user/login', user)
            .then(response => {
                toast.success(response.data.msg)
                dispatch(userInform(response.data))
            }).catch(err => {
                toast.error(err.response.data.errorMessage)
            })

    }

    return (
        <div className="login">
            <h2>Parolni unutdingiz</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="button">
                    <button type="submit">login</button>
                </div>
            </form>
        </div>
    )
}

export default Password
