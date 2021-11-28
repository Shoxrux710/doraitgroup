import React from 'react'
import './services.css'
import uchburchak from '../../../img/uchburchak.png'
import service1 from '../../../img/service1.png' 
import service2 from '../../../img/service2.png' 
import { useTranslation } from 'react-i18next'

export const Services = () => {

    const { t } = useTranslation()

    return (
        <div className='services-modal'>
            <div className='top'>
                <div>
                    <img src={uchburchak} alt='uchburchak' />
                    <span>{t('home.services')}</span>
                </div>
                <div className='line'></div>
            </div>

            <div className='wrapper'>
                <div className='service'>
                    <div className='left'>
                        <h2>{t('services.design')}</h2>
                        <p>{t('services.design_text')}</p>
                    </div>
                    <div className='right'>
                        <img src={service1} alt='service' />
                    </div>
                </div>
                <div className='service second'>
                    <div className='left'>
                        <h2>{t('services.site')}</h2>
                        <p>{t('services.site_text')}</p>
                    </div>
                    <div className='right'>
                        <img src={service2} alt='service' />
                    </div>
                </div>
            </div>

            <div className='wrapper'>
                <div className='service'>
                    <div className='left'>
                        <h2>{t('services.marketing')}</h2>
                        <p>{t('services.marketing_text')}</p>
                    </div>
                    <div className='right'>
                        <img src={service1} alt='service' />
                    </div>
                </div>
                <div className='service second'>
                    <div className='left'>
                        <h2>{t('services.system')}</h2>
                        <p></p>
                    </div>
                    <div className='right'>
                        <img src={service2} alt='service' />
                    </div>
                </div>
            </div>
        </div>
    )
}
