import React from 'react'
import './turnon.css'
import { useTranslation } from 'react-i18next'

const TurnOn = () => {

    const { t } = useTranslation()

    return (
        <div className='turn-on-modal'>
            <h1>{t('turnon.text')} <div>🖐</div> !</h1>
            <a href='/'>{t('turnon.back')}</a>
        </div>
    )
}

export default TurnOn
