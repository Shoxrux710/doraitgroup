import React, { useEffect, useState } from 'react'
import './home.css'
import sigin from '../../img/sigin.png'
import blog from '../../img/blog.png'
import portfolio from '../../img/portfolio.png'
import news from '../../img/news.png'
import contact from '../../img/contact.png'
import services from '../../img/services.png'
import about from '../../img/about.png'
import recycle from '../../img/recycle.png'
import pusk from '../../img/pusk.png'
import audio from '../../img/audio.png'
import user from '../../img/user.png'
import calculator from '../../img/calculator.png'
import game from '../../img/game.png'
import turnon from '../../img/turn-on.png'
import { IndexModal } from '../modals/IndexModal'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Calculator from './../modals/calculator/Calculator'
import Game from '../modals/game/Game'
import Loader2 from '../../loader2/Loader2'
import TurnOn from '../modals/turnon/TurnOn'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import {langThree} from '../../redux/action/userAction'

const Home = () => {

    const { t } = useTranslation()
    const dispatch = useDispatch()

    const changeLan = (lang) => {
        i18next.changeLanguage(lang)
        dispatch(langThree(lang))
    }

    const { auth } = useSelector(state => state.userLogin)

    const [openModal, setOpenModal] = useState(false)
    const [calc, setCalc] = useState(false)
    const [turn, setTurn] = useState(false)
    const [miniGame, setMiniGame] = useState(false)
    const [visible, setVisible] = useState(openModal)
    const [bottomPanel, setBottomPanel] = useState('')
    const [puskMenu, setPuskMenu] = useState(false)
    const [papka, setPapka] = useState()
    const [soat, setSoat] = useState(0)
    const [minut, setMinut] = useState(0)
    const [ovoz, setOvoz] = useState(false)
    const [logoLoader, setLogoLoader] = useState(true)
    const [allLang, setAllLang] = useState(false)

    const allLanguages = allLang ? 'all-languages all-languages-activ' : 'all-languages'

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            const hour = date.getHours()
            const minute = date.getMinutes()

            setSoat(hour);
            setMinut(minute);
        }, 1000);
        clearInterval();

        let count = 0;
        const countIntervalTime = setInterval(() => {
            count += 1;
            if (count === 6) {
                setLogoLoader(false)
                clearInterval(countIntervalTime)
            }
        }, 1000);
    }, []);

    const logoLoaderComp = logoLoader ? <Loader2 /> : null


    const clickedSign = papka === 'sign' ? 'papka clicked-papka' : 'papka'
    const clickedPortfolio = papka === 'portfolio' ? 'papka clicked-papka' : 'papka'
    const clickedNews = papka === 'news' ? 'papka clicked-papka' : 'papka'
    const clickedContact = papka === 'contact' ? 'papka clicked-papka' : 'papka'
    const clickedServices = papka === 'services' ? 'papka clicked-papka' : 'papka'
    const clickedAbout = papka === 'about' ? 'papka clicked-papka' : 'papka'
    const clickedRecycle = papka === 'recycle' ? 'papka clicked-papka' : 'papka'
    const clickedBlog = papka === 'blog' ? 'papka clicked-papka' : 'papka'

    const visibleToggle = visible ? 'bottom-modal bottom-modal-active' : 'bottom-modal'
    const bgImg = openModal ? "inner" : "inner not-bg"

    const togglePuskMenu = puskMenu ? 'pusk-menu active-pusk-menu' : 'pusk-menu'

    const clickedCalculator = calc ? <Calculator setCalc={setCalc} /> : null
    const clickedTurnOn = turn ? <TurnOn setTurn={setTurn} /> : null
    const clickedGame = miniGame ? <Game setMiniGame={setMiniGame} /> : null

    const audioWrapper = ovoz ? 'range-input-wrap range-input-wrap-activ' : 'range-input-wrap'

    const signInPanel = (
        <div className={visibleToggle} onClick={() => { setOpenModal(!openModal); setPapka('sign') }}>
            <img src={sigin} alt='sign in' />
            <span>{t('home.sign')}</span>
        </div>
    )

    const editPanel = (
        <div className={visibleToggle} onClick={() => { setOpenModal(!openModal); setPapka('edit') }}>
            <img src={user} alt='panda' />
            <span>{t('home.edit')}</span>
        </div>
    )

    const blogPanel = (
        <div className={visibleToggle} onClick={() => { setOpenModal(!openModal); setPapka('blog') }}>
            <img src={blog} alt='blog' />
            <span>{t('home.blog')}</span>
        </div>
    )

    const portfolioPanel = (
        <div className={visibleToggle} onClick={() => { setOpenModal(!openModal); setPapka('portfolio') }}>
            <img src={portfolio} alt='sign in' />
            <span>{t('home.portfolio')}</span>
        </div>
    )

    const newsPanel = (
        <div className={visibleToggle} onClick={() => { setOpenModal(!openModal); setPapka('news') }}>
            <img src={news} alt='sign in' />
            <span>{t('home.news')}</span>
        </div>
    )

    const contactPanel = (
        <div className={visibleToggle} onClick={() => { setOpenModal(!openModal); setPapka('contact') }}>
            <img src={contact} alt='sign in' />
            <span>{t('home.contact')}</span>
        </div>
    )

    const servicesPanel = (
        <div className={visibleToggle} onClick={() => { setOpenModal(!openModal); setPapka('services') }}>
            <img src={services} alt='sign in' />
            <span>{t('home.services')}</span>
        </div>
    )

    const aboutPanel = (
        <div className={visibleToggle} onClick={() => { setOpenModal(!openModal); setPapka('about') }}>
            <img src={about} alt='sign in' />
            <span>{t('home.about_us')}</span>
        </div>
    )

    const recyclePanel = (
        <div className={visibleToggle} onClick={() => { setOpenModal(!openModal); setPapka('recycle') }}>
            <img src={recycle} alt='sign in' />
            <span>{t('home.recycle_bin')}</span>
        </div>
    )


    const style = auth ? "qator" : "qator qatormas"

    const authLink = auth ? (
        <Link to='/then/blog' className={clickedBlog} onClick={() => { setPapka('blog'); setOpenModal(true); setVisible(true); setBottomPanel('blog'); setCalc(false) }} >
            <img src={blog} alt='my computer' />
            <p>{t('home.blog')}</p>
        </Link>
    ) : (
        <Link to='/then/sign' className={clickedSign} onClick={() => { setPapka('sign'); setOpenModal(true); setVisible(true); setBottomPanel('sigin'); setCalc(false) }} >
            <img src={sigin} alt='my computer' />
            <p>{t('home.sign')}</p>
        </Link>
    )


    const activSignInPanel = bottomPanel === 'sigin' ? signInPanel : null
    const activEditPanel = bottomPanel === 'edit' ? editPanel : null
    const activBlogPanel = bottomPanel === 'blog' ? blogPanel : null
    const activPortfolio = bottomPanel === 'portfolio' ? portfolioPanel : null
    const activNews = bottomPanel === 'news' ? newsPanel : null
    const activContact = bottomPanel === 'contact' ? contactPanel : null
    const activServices = bottomPanel === 'services' ? servicesPanel : null
    const activAbout = bottomPanel === 'about' ? aboutPanel : null
    const activRecycleBin = bottomPanel === 'recycle' ? recyclePanel : null

    return (
        <div className='home-page'>
            {logoLoaderComp}
            <div className='work-panel' onClick={() => { setPuskMenu(false); setOvoz(false); setAllLang(false) }}>
                {authLink}
                <Link to='/then/portfolio' className={clickedPortfolio} onClick={() => { setPapka('portfolio'); setOpenModal(true); setVisible(true); setBottomPanel('portfolio'); setCalc(false) }} >
                    <img src={portfolio} alt='my computer' />
                    <p>{t('home.portfolio')}</p>
                </Link>
                <Link to='/then/news' className={clickedNews} onClick={() => { setPapka('news'); setOpenModal(true); setVisible(true); setBottomPanel('news'); setCalc(false) }} >
                    <img src={news} alt='my computer' />
                    <p>{t('home.news')}</p>
                </Link>
                <Link to='/then/contact' className={clickedContact} onClick={() => { setPapka('contact'); setOpenModal(true); setVisible(true); setBottomPanel('contact'); setCalc(false) }} >
                    <img src={contact} alt='my computer' />
                    <p>{t('home.contact')}</p>
                </Link>
                <Link to='/then/services' className={clickedServices} onClick={() => { setPapka('services'); setOpenModal(true); setVisible(true); setBottomPanel('services'); setCalc(false) }} >
                    <img src={services} alt='my computer' />
                    <p>{t('home.services')}</p>
                </Link>
                <Link to='/then/about' className={clickedAbout} onClick={() => { setPapka('about'); setOpenModal(true); setVisible(true); setBottomPanel('about'); setCalc(false) }} >
                    <img src={about} alt='my computer' />
                    <p>{t('home.about_us')}</p>
                </Link>
                <Link to='/then/recycle' className={clickedRecycle} onClick={() => { setPapka('recycle'); setOpenModal(true); setVisible(true); setBottomPanel('recycle'); setCalc(false) }} >
                    <img src={recycle} alt='my computer' />
                    <p>{t('home.recycle_bin')}</p>
                </Link>
            </div>
            <div className='bottom-panel' onClick={() => setPapka('')}>
                <div className='pusk' onClick={() => setPuskMenu(!puskMenu)}>
                    <img src={pusk} alt='pusk menyu' />
                    <span>Start</span>
                </div>

                <div className={togglePuskMenu} onClick={() => setAllLang(false)}>
                    <Link to='/then/calculator' className='qator' onClick={() => { setPuskMenu(false); setCalc(true); setBottomPanel('calculator'); setVisible(true); setOpenModal(false) }}>
                        <img src={calculator} alt='calculator' />
                        <p>{t('home.calculator')}</p>
                    </Link>
                    {/* //////////////////////// */}
                    {
                        auth ?
                            <Link to='/then/edit' className={style} onClick={() => { setOpenModal(auth); setVisible(auth); setPapka('edit'); setBottomPanel('edit'); setPuskMenu(!auth); setCalc(false) }}>
                                <img src={user} alt='edit' />
                                <p>{t('home.edit')}</p>
                            </Link>
                           : ''
                    }
                    <Link to='/then/portfolio' className='qator' onClick={() => { setOpenModal(true); setVisible(true); setPapka('portfolio'); setBottomPanel('portfolio'); setPuskMenu(false); setCalc(false) }}>
                        <img src={portfolio} alt='portfolio' />
                        <p>{t('home.portfolio')}</p>
                    </Link>
                    <Link to='/then/news' className='qator' onClick={() => { setOpenModal(true); setVisible(true); setPapka('news'); setBottomPanel('news'); setPuskMenu(false); setCalc(false) }}>
                        <img src={news} alt='news' />
                        <p>{t('home.news')}</p>
                    </Link>
                    <Link to='/then/contact' className='qator' onClick={() => { setOpenModal(true); setVisible(true); setPapka('contact'); setBottomPanel('contact'); setPuskMenu(false); setCalc(false) }}>
                        <img src={contact} alt='contact' />
                        <p>{t('home.contact')}</p>
                    </Link>
                    <Link to='/then/services' className='qator' onClick={() => { setOpenModal(true); setVisible(true); setPapka('services'); setBottomPanel('services'); setPuskMenu(false); setCalc(false) }}>
                        <img src={services} alt='services' />
                        <p>{t('home.services')}</p>
                    </Link>
                    <Link to='/then/game' className='qator' onClick={() => { setPuskMenu(false); setVisible(true); setMiniGame(true); setOpenModal(false); setBottomPanel('game') }}>
                        <img src={game} alt='game' />
                        <p>Minisweeper</p>
                    </Link>
                    <Link to='/then/turnon' className='qator' onClick={() => { setPuskMenu(false); setTurn(true); setOpenModal(false); setBottomPanel('turn') }}>
                        <img src={turnon} alt='turnon' />
                        <p>{t('home.turn_on')}</p>
                    </Link>
                </div>

                <div className='hidden-modals' onClick={() => setAllLang(false)}>
                    <div className={bgImg}>
                        {activSignInPanel}
                        {activEditPanel}
                        {activBlogPanel}
                        {activPortfolio}
                        {activNews}
                        {activContact}
                        {activServices}
                        {activAbout}
                        {activRecycleBin}
                    </div>
                </div>
                <div className='right-panel'>
                    <div className='lan-wrap' onClick={() => setAllLang(!allLang)}>{t('home.lan')}</div>
                    <div className={allLanguages}>
                        <ul>
                            <li onClick={() => { setAllLang(false); changeLan('uz') }}>Uz</li>
                            <li onClick={() => { setAllLang(false); changeLan('ru') }}>Ru</li>
                            <li onClick={() => { setAllLang(false); changeLan('en') }}>En</li>
                        </ul>
                    </div>

                    <div className={audioWrapper}>
                        <input type='range' />
                    </div>
                    <div className='clock' onClick={() => setOvoz(!ovoz)}>
                        <img src={audio} alt='audio' />
                        <span>{soat}:{minut}</span>
                    </div>
                </div>
            </div>
            <IndexModal openModal={openModal} setOpenModal={setOpenModal} setVisible={setVisible} bottomPanel={bottomPanel} papka={papka} />
            {clickedCalculator}
            {clickedGame}
            {clickedTurnOn}
        </div>
    )
}

export default Home
