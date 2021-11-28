import React from 'react'
import './edit.css'
import panda from '../../../img/panda.png'
import { useTranslation } from 'react-i18next'

const Edit = () => {

    const { t } = useTranslation()

    return (
        <form className='edit-modal'>
            <div className='top'>
                <div>
                    <img src={panda} alt='user' />
                    <h2>{t('edit.username')}</h2>
                </div>
                <div>
                    <h2>{t('edit.edit_profil')}</h2>
                </div>
            </div>

            <div className='add-pic'>
                <label for='file'><div className='user-pic'></div></label>
                <div className='input-wrap'>
                    <input id='file' type='file' />
                </div>
                <label for='file'><p>{t('edit.change')}</p></label>
            </div>

            <div className='label-input'>
                <label for='name' >{t('edit.username')}</label>
                <input id='name' />
            </div>

            <div className='label-input'>
                <label for='instagram' >{t('edit.instagram')}</label>
                <input id='instagram' />
            </div>

            <div className='label-input'>
                <label for='facebook' >{t('edit.facebook')}</label>
                <input id='facebook' />
            </div>

            <div className='label-input'>
                <label for='telegram' >{t('edit.telegram')}</label>
                <input id='telegram' />
            </div>

            <div className='btn-wrap'>
                <button>{t('edit.edit')}</button>
            </div>
        </form>
    )
}

export default Edit
