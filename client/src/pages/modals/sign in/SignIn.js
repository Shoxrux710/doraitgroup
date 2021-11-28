import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { toast } from 'react-toastify'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {userProfile} from '../../../redux/action/userAction'
import './sign-in.css'

import telegram from '../../../img/telegram.png'
import facebook from '../../../img/facebook.png'
import instagram from '../../../img/instagram.png'
import { useTranslation } from 'react-i18next'



const SignIn = (props) => {

    const { t } = useTranslation()


    const dispatch = useDispatch()
    const { setOpenModal, setVisible } = props
    const [name, setName] = useState("")
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [loginOne, setLoginOne] = useState("")
    const [passwordOne, setPasswordOne] = useState("")

    const loginSubmit = (e) => {
        e.preventDefault()

        const loginone = {
            login: loginOne,
            password: passwordOne
        }

        axios.post('/api/client/login', loginone)
              .then(response => {
                toast.success(response.data.msg)
                dispatch(userProfile(response.data))
                setLoginOne("")
                setPasswordOne("")
              }).catch(err => {
                toast.error(err.response.data.errorMessage)
            })
    }
    
    const registerSubmit = (e) => {
        e.preventDefault()

        const user = {
            name,
            login,
            email,
            password,
            confirm
        }

        console.log(user);

        axios.post('/api/client/register', user)
              .then(response => {
                toast.success(response.data.successMessage)
                 dispatch(userProfile(response.data))
                setName("")
                setLogin("")
                setEmail("")
                setPassword("")
                setConfirm("")
              }).catch(err => {
                toast.error(err.response.data.errorMessage)
            }) 
    }


    const check = () => {
        if(name.length > 0 && email.length > 0 && login.length > 0 && password.length > 0 && confirm.length > 0) {
            setOpenModal(false)
            setVisible(false)
        }
    }

    const checkLogin = () => {
        if(loginOne.length > 0 && passwordOne.length > 0) {
            setOpenModal(false)
            setVisible(false)
        }
    }

    const ruyhat = (
        <form 
        onSubmit={registerSubmit}
        className='sign-in-modal'>
            <h1>{t('signin.registr')}</h1>
            <div className='input-wrapper'>
                <label>{t('signin.fullname')}</label>
                <input 
                type='text' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='input-wrapper'>
                <label>{t('signin.email')}:</label>
                <input 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='input-wrapper'>
                <label>Login:</label>
                <input 
                type='text'
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                />
            </div>
            <div className='input-wrapper'>
                <label>Parol:</label>
                <input 
                type='password'
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                />
            </div>
            <div className='input-wrapper'>
                <label>{t('signin.reparol')}</label>
                <input 
                type='password'
                value={confirm}
                onChange={(e) => {
                    setConfirm(e.target.value);
                }}
                />
            </div>
            <div onClick={check}>
                <button type="submit">{t('signin.registr')}</button>
            </div>
        </form>
    )
    
    const kirish = (
            <form 
            onSubmit={loginSubmit}
            className='sign-in-modal'>
                <h1>{t('signin.enter')}</h1>
                <div className='input-wrapper'>
                    <label>Login:</label>
                    <input 
                    type='text'
                    value={loginOne}
                    onChange={(e) => setLoginOne(e.target.value)}
                    />
                </div>
                <div className='input-wrapper'>
                    <label>Parol:</label>
                    <input 
                       value={passwordOne}
                       onChange={(e) => setPasswordOne(e.target.value)}
                    type='password' />
                </div>
                <div className='input-wrapper'>
                    <div className='checkbox-wrapper'>
                        <input type='checkbox' id='checkbox' />
                        <label htmlFor='checkbox'>{t('signin.remem')}</label>
                    </div>
                    <p onClick={() => setData('tiklash')}>{t('signin.forget')}?</p>
                </div>
                <div className='input-wrapper'>
                    <p onClick={() => setData('ruyhat')}>{t('signin.registr')}</p>
                    <div className='socials'>
                        <a href='/' className='circle'>
                            <img src={instagram} alt='instagram' />
                        </a>
                        <a href='/' className='circle'>
                            <img src={telegram} alt='telegram' />
                        </a>
                        <a href='/' className='circle'>
                            <img src={facebook} alt='facebook' />
                        </a>
                    </div>
                </div>
                <div onClick={checkLogin}>
                    <button type="submit">{t('signin.enter')}</button>
                </div>
            </form>
    )
    
    const tiklash = (
        <form className='sign-in-modal'>
            <h1>{t('signin.tiklash')}</h1>
            <div className='input-wrapper'>
                <label>{t('signin.phone')}:</label>
                <ReactInputMask type='text' mask="+\9\9\8 (99) 999-99-99" required />
            </div>
            <div className='input-wrapper'>
                <span>{t('signin.tiklash_text')}</span>
            </div>
            <div onClick={() => {setOpenModal(false); setVisible(false)}}>
                <button>{t('contact.send')}</button>
            </div>
        </form>
    )

    const [data, setData] = useState('kirish')

    const kirishActiv = data === 'kirish' ? kirish : null
    const ruyhatActiv = data === 'ruyhat' ? ruyhat : null
    const tiklashActiv = data === 'tiklash' ? tiklash : null

    return (
        <>
            {kirishActiv}
            {ruyhatActiv}
            {tiklashActiv}
            {/* {ruyhat} */}
        </>
    )
}

export default SignIn
