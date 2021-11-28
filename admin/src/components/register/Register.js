import React, { useState } from 'react'
import axios from '../../utils/axiosInterceptors';
import { toast } from 'react-toastify'
import './register.css'

const Login = () => {

    const [name, setName] = useState("")
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")


    const onSubmit = (e) => {
        e.preventDefault()
      
        const user = {
            login,
            password,
            name,
            email,
            confirm
        }
        axios.post('/api/user/register', user)
            .then(response => {
                toast.success(response.data.successMessage)
                setName("")
                setLogin("")
                setEmail("")
                setPassword("")
                setConfirm("")
            }).catch(err => {
                toast.error(err.response.data.errorMessage)
            })

    }

    return (
        <div className="register">
            <h2>Ro'yxatdan o'tish</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Ism</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Login</label>
                    <input
                        type="text"
                        className="form-control"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Parol</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Parolni qayta terish</label>
                    <input
                        type="password"
                        className="form-control"
                        value={confirm}
                        onChange={(e) => {
                            setConfirm(e.target.value);
                        }}
                    />
                </div>
                <div className="button">
                    <button type="submit">register</button>
                </div>
            </form>
        </div>
    )
}

export default Login
