import React from 'react'
import './about.css'
import about1 from '../../../img/about1.png'
import about2 from '../../../img/about2.png'
import about3 from '../../../img/about3.png'
import about4 from '../../../img/about4.png'
import about5 from '../../../img/about5.png'
import about6 from '../../../img/about6.png'
import ins from '../../../img/ins.png'
import tel from '../../../img/tel.png'
import fac from '../../../img/fac.png'

import qudrat from '../../../img/qudrat.png'
import sardor from '../../../img/sardor.png'
import temur from '../../../img/temur.png'
import elyor from '../../../img/elyor.png'
import yaxyo from '../../../img/yaxyo.png'
import shoxrux from '../../../img/shoxrux.png'
import shavkat from '../../../img/shavkat.png'
import abdulxafiz from '../../../img/abdulxafiz.png'
import sarvar from '../../../img/sarvar.png'
import jahongir from '../../../img/jahongir.png'

import { useTranslation } from 'react-i18next'


const About = () => {

    const { t } = useTranslation()

    return (
        <div className='about-modal'>
            <h1>{t('about.about_us')}</h1>
            <div className='p-wrap'>
                <p>{t('about.text')}</p>
            </div>
            <div className='img-wrapper'>
                <img src={about1} alt='rasm' className='bir' />
                <img src={about2} alt='rasm' className='ikki' />
                <img src={about3} alt='rasm' className='uch' />
            </div>
            <div className='img-wrapper'>
                <img src={about4} alt='rasm' className='turt' />
                <img src={about5} alt='rasm' className='besh' />
                <img src={about6} alt='rasm' className='olti' />
            </div>
            <div className='p-wrap secondP'>
                <p>{t('about.text2')}</p>
            </div>
            <h2>{t('about.our_team')}</h2>
            <div className='team-wrapper'>

                <div className="person">
                    <img src={shavkat} alt="Avatar" className="image" />
                    <h6>CEO Founder, Team Leader</h6>
                    <h3>Shavkat Narzullayev</h3>
                    <div className="overlay">
                        <h4>Shavkat Narzullayev</h4>
                        <h6>CEO Founder, Team Leader</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>21</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>4 yil</span>
                        </div>
                        <div>
                            <p>{t('about.number_projects')}: </p>
                            <span>5+</span>
                        </div>
                        <div className='socials'>
                            <a href='https://instagram.com/nazrulloh.on' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/est20010611' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://facebook.com/shavkat.narzullayev.37' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>

                <div className="person">
                    <img src={abdulxafiz} alt="Avatar" className="image" />
                    <h6>CEO Founder, Project Manager</h6>
                    <h3>Abdulxafiz Maxamadaliyev</h3>
                    <div className="overlay">
                        <h4>Abdulxafiz Maxamadaliyev</h4>
                        <h6>CEO Founder, Project Manager</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>21</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>2 yil</span>
                        </div>
                        <div>
                            <p>{t('about.number_projects')}: </p>
                            <span>5+</span>
                        </div>
                        <div className='socials'>
                            <a href='https://instagram.com/xafiz.083' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/khafiz1031' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://facebook.com/abdulxafiz.maxamadaliev' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>

                <div className="person">
                    <img src={jahongir} alt="Avatar" className="image" />
                    <h6>CO Founder, Marketolog</h6>
                    <h3>Jahongir Tursunov</h3>
                    <div className="overlay">
                        <h4>Jahongir Tursunov</h4>
                        <h6>CO Founder, Marketolog</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>19</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>1 yil</span>
                        </div>
                        <div className='socials'>
                            <a href='https://instagram.com/jonick_axi' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/jonick_axi1' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>

                <div className="person">
                    <img src={sardor} alt="Avatar" className="image" />
                    <h6>Fullstack Developer</h6>
                    <h3>Sardor Igamberdiyev</h3>
                    <div className="overlay">
                        <h4>Sardor Igamberdiyev</h4>
                        <h6>Fullstack Developer</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>23</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>1 yil</span>
                        </div>
                        <div>
                            <p>{t('about.rank')}: </p>
                            <span>Middle</span>
                        </div>
                        <div>
                            <p>{t('about.number_works')}: </p>
                            <span>10+</span>
                        </div>
                        <div className='socials'>
                            <a href='https://instagram.com/s_igamberdiyev' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/iSardor7' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>
                
                <div className="person">
                    <img src={shoxrux} alt="Avatar" className="image" />
                    <h6>Fullstack Developer</h6>
                    <h3>Shoxrux Buxorov</h3>
                    <div className="overlay">
                        <h4>Shoxrux Buxorov</h4>
                        <h6>Fullstack Developer</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>22</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>1 yil</span>
                        </div>
                        <div>
                            <p>{t('about.rank')}: </p>
                            <span>Middle</span>
                        </div>
                        <div>
                            <p>{t('about.number_works')}: </p>
                            <span>10+</span>
                        </div>
                        <div className='socials'>
                            <a href='https://instagram.com/shoxruxdev' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/Mern_developer' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>

                <div className="person">
                    <img src={qudrat} alt="Avatar" className="image" />
                    <h6>Fronted Developer</h6>
                    <h3>Qudrat Nuriddinov</h3>
                    <div className="overlay">
                        <h4>Qudrat Nuriddinov</h4>
                        <h6>Fronted Developer</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>21</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>1 yil</span>
                        </div>
                        <div>
                            <p>{t('about.rank')}: </p>
                            <span>Junior</span>
                        </div>
                        <div>
                            <p>{t('about.number_works')}: </p>
                            <span>10+</span>
                        </div>
                        <div className='socials'>
                            <a href='https://www.instagram.com/nuriddinov_qudratjon/' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/Nuriddinov_Qudrat' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://www.facebook.com/Nuriddinov.Qudratjon' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>

                <div className="person">
                    <img src={sarvar} alt="Avatar" className="image" />
                    <h6>Fronted Developer</h6>
                    <h3>Sarvar Fahrutdinov</h3>
                    <div className="overlay">
                        <h4>Sarvar Fahrutdinov</h4>
                        <h6>Fronted Developer</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>16</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>6 oy</span>
                        </div>
                        <div>
                            <p>{t('about.rank')}: </p>
                            <span>Junior</span>
                        </div>
                        <div>
                            <p>{t('about.number_works')}: </p>
                            <span>5+</span>
                        </div>
                        <div className='socials'>
                            <a href='https://instagram.com/sarvar_sarubola' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/sarvarius' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>

                <div className="person">
                    <img src={yaxyo} alt="Avatar" className="image" />
                    <h6>Fronted Developer</h6>
                    <h3>Yaxyobek O'rmonaliyev</h3>
                    <div className="overlay">
                        <h4>Yaxyobek O'rmonaliyev</h4>
                        <h6>Fronted Developer</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>18</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>2 oy</span>
                        </div>
                        <div>
                            <p>{t('about.rank')}: </p>
                            <span>Junior</span>
                        </div>
                        <div>
                            <p>{t('about.number_works')}: </p>
                            <span>2</span>
                        </div>
                        <div className='socials'>
                            <a href='https://instagram.com/yakhyobek007' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/Webdeveloper2309 ' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://facebook.com/yakhyobek.urmonaliyev.9' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>

                <div className="person">
                    <img src={temur} alt="Avatar" className="image" />
                    <h6>UX\UI Designer</h6>
                    <h3>Temur Jo'rayev</h3>
                    <div className="overlay">
                        <h4>Temur Jo'rayev</h4>
                        <h6>UX\UI Designer</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>19</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>2 yil</span>
                        </div>
                        <div>
                            <p>{t('about.rank')}: </p>
                            <span>Middle</span>
                        </div>
                        <div>
                            <p>{t('about.number_works')}: </p>
                            <span>20+</span>
                        </div>
                        <div className='socials'>
                            <a href='https://instagram.com/Webdesign2002' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/temur968' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>

                <div className="person">
                    <img src={elyor} alt="Avatar" className="image" />
                    <h6>UX\UI Designer</h6>
                    <h3>Elyor Yusupjonov</h3>
                    <div className="overlay">
                        <h4>Elyorbek Yusupjonov</h4>
                        <h6>UX\UI Designer</h6>
                        <div>
                            <p>{t('about.age')}: </p>
                            <span>19</span>
                        </div>
                        <div>
                            <p>{t('about.experience')}: </p>
                            <span>4 oy</span>
                        </div>
                        <div>
                            <p>{t('about.rank')}: </p>
                            <span>Junior</span>
                        </div>
                        <div>
                            <p>{t('about.number_works')}: </p>
                            <span>5+</span>
                        </div>
                        <div className='socials'>
                            <a href='https://instagram.com/yusupov_e1' target="_blank" rel="noreferrer"><img src={ins} alt='instagram' /></a>
                            <a href='https://t.me/Elyorbe_01' target="_blank" rel="noreferrer"><img src={tel} alt='instagram' /></a>
                            <a href='https://facebook.com/elyorbek.yusupjonov' target="_blank" rel="noreferrer"><img src={fac} alt='instagram' /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About