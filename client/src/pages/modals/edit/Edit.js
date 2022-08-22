import React, { useState, useEffect } from 'react'
import './edit.css'
import panda from '../../../img/panda.png'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import {logOut} from '../../../redux/action/userAction'
import axios from 'axios'

const Edit = ({ setOpenModal, setVisible }) => {

    const { t } = useTranslation()
    const dispatch = useDispatch()

    const { token } = useSelector(state => state.userLogin)

    const [imagesUser, setImagesUser] = useState(null)
    const [telegram, setTelegram] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [login, setLogin] = useState('')
    const [userId, setUserId] = useState({})
    const [avatarFront, setAvatarFront] = useState(null);
    const [imageUrl, setImageUrl] = useState(null)

    let links = window.location.pathname ? "http://localhost:4008" : ''

    const history = useHistory()

    useEffect(() => {
        axios.get('/api/client/all/put', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(response => {
            setUserId(response.data.user);
            setLogin(response.data.user.login)
            setTelegram(response.data.user.telegram)
            setFacebook(response.data.user.facebook)
            setInstagram(response.data.user.instagram)
            setImageUrl(response.data.user.imagesUser.fileName)
            
        })

    },[token])

    const onSubmit = (e) => {
        
        e.preventDefault()
        const formData = new FormData(e.target)
        axios.put(`/api/client/update`, formData, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(response => {
            toast.success(response.data.successMessage)
            history.push('/then')
            setAvatarFront(null)
            setImageUrl(null)
            setImagesUser(null)
            setOpenModal(false)
            setVisible(false)
        }).catch((err) => {
            toast.error(err.response.data.errorMessage)
        })
    }

    const img = imageUrl ? imageUrl : null

    let avatarImg

    if (imageUrl && !avatarFront){
        avatarImg = `${links}/images/user/${img}`
    }
    else if(avatarFront){
        avatarImg = URL.createObjectURL(avatarFront)
    }else{
        avatarImg = panda
    }

    // console.log("images",avatarImg);

    return (
        <form
            className='edit-modal'
            onSubmit={onSubmit}
        >
            <div className='top'>
                <div>
                    <img src={avatarImg} alt='' />
                    <h2>{userId.name}</h2>
                </div>
                <div>
                    <h2
                    onClick={() => {dispatch(logOut()); setOpenModal(false); setVisible(false)}}
                    >{t('edit.edit_profil')}</h2>
                </div>
            </div>

            <div className='add-pic'>
                <div className='input-wrap'>
                    <input
                        type='file'
                        name="imagesUser"
                        files={imagesUser}
                        onChange={(e) => {
                            setImagesUser(e.target.files)
                            const file = Array.from(e.target.files);
                            setAvatarFront(file[0]);
                        }}
                    />
                </div>
                <label><p>{t('edit.change')}</p></label>
            </div>

            <div className='label-input'>
                <label htmlFor='name' >{t('edit.username')}</label>
                <input
                    id='name'
                    name="login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>

            <div className='label-input'>
                <label htmlFor='instagram' >{t('edit.instagram')}</label>
                <input
                    id='instagram'
                    name="instagram"
                    value={instagram ? instagram : ''}
                    onChange={(e) => setInstagram(e.target.value)}
                />
            </div>

            <div className='label-input'>
                <label htmlFor='facebook' >{t('edit.facebook')}</label>
                <input
                    id='facebook'
                    name="facebook"
                    value={facebook ? facebook : ''}
                    onChange={(e) => setFacebook(e.target.value)}
                />
            </div>

            <div className='label-input'>
                <label htmlFor='telegram' >{t('edit.telegram')}</label>
                <input
                    id='telegram'
                    name="telegram"
                    value={telegram ? telegram : ''}
                    onChange={(e) => setTelegram(e.target.value)}
                />
            </div>

            <div className='btn-wrap'>
                <button type="submit">{t('edit.edit')}</button>
            </div>
        </form>
    )
}

export default Edit
