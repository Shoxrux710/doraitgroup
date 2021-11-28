import React from 'react'
import './styles.css'
import sigin from '../../img/sigin.png'
import portfolio from '../../img/portfolio.png'
import news from '../../img/news.png'
import contact from '../../img/contact.png'
import services from '../../img/services.png'
import about from '../../img/about.png'
import recycle from '../../img/recycle.png'
import blog from '../../img/blog.png'
import user from '../../img/user.png'
import close from '../../img/close.png'
import minus from '../../img/minus.png'
import square from '../../img/square.png'
import SignIn from './sign in/SignIn'
import Portfolio from './portfolio/Portfolio'
import News from './news/News'
import { Route, Switch } from 'react-router'
import { Contact } from './contact/Contact'
import { Services } from './services/Services'
import About from './about/About'
import Blog from './blog/Blog'
import NewsById from './news/NewsById'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Edit from './edit/Edit'

export const IndexModal = (props) => {

    const { t } = useTranslation()
    const { openModal, setOpenModal, setVisible, bottomPanel } = props

    const showModal = openModal ? "windows-modal openedModal" : "windows-modal"


    const signInPanel = (
        <div className='left'>
            <img src={sigin} alt='sign in' />
            <span>{t('home.sign')}</span>
        </div>
    )

    const editPanel = (
        <div className='left'>
            <img src={user} alt='edit' />
            <span>{t('home.edit')}</span>
        </div>
    )
    
    const blogPanel = (
        <div className='left'>
            <img src={blog} alt='sign in' />
            <span>{t('home.blog')}</span>
        </div>
    )

    const portfolioPanel = (
        <div className='left'>
            <img src={portfolio} alt='sign in' />
            <span>{t('home.portfolio')}</span>
        </div>
    )

    const newsPanel = (
        <div className='left'>
            <img src={news} alt='sign in' />
            <span>{t('home.news')}</span>
        </div>
    )

    const contactPanel = (
        <div className='left'>
            <img src={contact} alt='sign in' />
            <span>{t('home.contact')}</span>
        </div>
    )

    const servicesPanel = (
        <div className='left'>
            <img src={services} alt='sign in' />
            <span>{t('home.services')}</span>
        </div>
    )

    const aboutPanel = (
        <div className='left'>
            <img src={about} alt='sign in' />
            <span>{t('home.about_us')}</span>
        </div>
    )
    
    const recyclePanel = (
        <div className='left'>
            <img src={recycle} alt='sign in' />
            <span>{t('home.recycle_bin')}</span>
        </div>
    )


    const activSignInPanel = bottomPanel === 'sigin' ? signInPanel : null
    const activEditPanel = bottomPanel === 'edit' ? editPanel : null
    const activBlogPanel = bottomPanel === 'blog' ? blogPanel : null
    const activPortfolioPanel = bottomPanel === 'portfolio' ? portfolioPanel : null
    const activNewsPanel = bottomPanel === 'news' ? newsPanel : null
    const activContactPanel = bottomPanel === 'contact' ? contactPanel : null
    const activServicesPanel = bottomPanel === 'services' ? servicesPanel : null
    const activAboutPanel = bottomPanel === 'about' ? aboutPanel : null
    const activRecyclePanel = bottomPanel === 'recycle' ? recyclePanel : null


    return (
        <div className={showModal}>
            <div className='top-panel'>
                {activSignInPanel}
                {activBlogPanel}
                {activPortfolioPanel}
                {activNewsPanel}
                {activContactPanel}
                {activServicesPanel}
                {activAboutPanel}
                {activRecyclePanel}
                {activEditPanel}
                <div className='right'>
                    <div className='square' onClick={() => setOpenModal(false)}>
                        <img src={minus} alt='close icon' />
                    </div>
                    <div className='square'>
                        <img src={square} alt='close icon' />
                    </div>
                    <Link to='/then' className='square' onClick={() => {setOpenModal(false); setVisible(false)}}>
                        <img src={close} alt='close icon' />
                    </Link>
                </div>
            </div>
            <div className='body-panel'>
                <div className='top'>
                    <p><span>F</span>ile</p>
                    <p><span>E</span>dit</p>
                    <p><span>V</span>iew</p>
                    <p><span>H</span>elp</p>
                </div>
                <div className='center'>
                    <Switch>
                        <Route path='/then/sign'>
                            <SignIn setOpenModal={setOpenModal} setVisible={setVisible} />
                        </Route>
                        <Route path='/then/blog'>
                            <Blog setOpenModal={setOpenModal} setVisible={setVisible} />
                        </Route>
                        <Route path='/then/portfolio' component={Portfolio} />
                        <Route exact path='/then/news' component={News} />
                        <Route path='/then/news/:id' component={NewsById} />
                        <Route path='/then/contact' component={Contact} />
                        <Route path='/then/services' component={Services} />
                        <Route path='/then/about' component={About} />
                        <Route path='/then/edit' component={Edit} />
                    </Switch>
                </div>
                <div className='bottom'>
                    <div>
                        <p>4 object(s)</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
