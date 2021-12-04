import React from 'react'
import './contact.css'
import uchburchak from '../../../img/uchburchak.png'
import ReactInputMask from 'react-input-mask'
import { useTranslation } from 'react-i18next'

export const Contact = () => {

    const { t } = useTranslation()

    return (
        <div className='contact-modal'>
            <div className='top'>
                <div>
                    <img src={uchburchak} alt='uchburchak' />
                    <span>{t('home.contact')}</span>
                </div>
                <div className='line'></div>
            </div>
            <div className='wrapper'>
                <form>
                    <div className='input-wrap'>
                        <div>
                            <label htmlFor='name'>{t('contact.name')}:</label>
                            <input type='text' id='name' required />
                        </div>
                        <div>
                            <label htmlFor='phone'>{t('contact.phone')}:</label>
                            <ReactInputMask id='phone' type='text' mask="+\9\9\8 (99) 999-99-99" required />
                        </div>
                    </div>
                    <div className='textarea-wrap'>
                        <label htmlFor='comment' className='izoh-label'>{t('contact.comment')}:</label>
                        <textarea id='comment' required></textarea>
                    </div>
                    <div className='button-wrap'>
                        <div></div>
                        <button>{t('contact.send')}</button>
                    </div>
                </form>
                <div className='adres-wrapper'>
                    <div className='left'>
                        <div>
                            <h3>{t('contact.address')}:</h3>
                            <p>{t('contact.address_')}</p>
                        </div>
                        <div>
                            <h3>{t('contact.email')}:</h3>
                            <p>doraitgroup@gmail.com</p>
                        </div>
                        <div>
                            <h3>{t('contact.phone')}:</h3>
                            <p>+99895 054 54 44 <br />+99890 046 08 31</p>
                        </div>
                    </div>
                    <div className='right'>
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.637805627511!2d69.27880266485599!3d41.35965866120721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIxJzM0LjYiTiA2OcKwMTYnNDQuMyJF!5e0!3m2!1sen!2s!4v1635326921861!5m2!1sen!2s"  allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
