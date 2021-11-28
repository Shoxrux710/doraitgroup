import React from 'react'
import { Link } from 'react-router-dom'
import './kirish.css'
import thenButton from '../../img/thenButton.png'
import futureButton from '../../img/futureButton.png'
import { useTranslation } from 'react-i18next'

const Kirish = () => {

    const { t } = useTranslation()

    return (
        <div className='kirish-page'>
            <div className='then'>
                <div className='curtain'>
                    <h1>{t('kirish.then')}</h1>
                    <Link to='/then' className='link'>
                        <img src={thenButton} alt='rasm' />
                    </Link>
                </div>
            </div>
            <div className='future'>
                <div className='curtain'>
                    <h1>{t('kirish.future')}</h1>
                    <Link to='/future' className='link'>
                        <img src={futureButton} alt='rasm' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Kirish
