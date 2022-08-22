import React from 'react'
import { MdDateRange } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { BsArrowUp } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import './home.css'

const Home = (props) => {

    const { 
     news,
     userHome,
     portHome,
     newCount, 
     portCount, 
     userCount, 
     blogCount, 
     blogHome, 
     newloading,
     blogloading,
     accountloading,
     portloading
      } = props

      let links = window.location.pathname ? "http://localhost:4008" : ''


    return (
        <div className="homes">
            <div className="items">
                <div className="blog">
                    <div className="dail">
                        <h3>News</h3>
                        <p>Added news</p>
                        <h5><BsArrowUp className="top" />{newCount}</h5>
                    </div>
                </div>
                <div className="base">
                    {
                        newCount === 0 ? <div className="product">not Portfolio </div> :
                          <>
                           {
                               newloading ? <>Laoding </> :
                            news.map((items) => {


                                let descriptionContinue = '';
                                let continueText = '';

                                for (let i = 0; i < items.description.uz.length; i++) {
                                    if (i < 30) {
                                        descriptionContinue += items.description.uz[i];
                                    } else {
                                        continueText = '...';
                                        break;
                                    }
                                }

                                return (
                                    <div className="news" key={items._id}>
                                        <div className="image">
                                            <img src={`${links}/images/news/${items.imageNews.fileName}`} alt="" />
                                        </div>
                                        <div className="lorem">
                                            <div className="date">
                                                <div className="date_one">
                                                    <MdDateRange className="fa" /> <span>{items.date.substring(0, 10)}</span>
                                                </div>
                                                <span className="line"></span>
                                                <div className="date_two">
                                                    <AiOutlineEye className="fa" /> <span>{items.view}</span>
                                                </div>
                                            </div>
                                            <p>{descriptionContinue}{continueText}</p>
                                        </div>
                                    </div>
                                )
                            }) 
                           }
                          </>
                    }
                </div>
            </div>
            <div className="items">
                <div className="blog">
                    <div className="dail">
                        <h3>Portfolio</h3>
                        <p>Added portfolio</p>
                        <h5><BsArrowUp className="top" />{portCount}</h5>
                    </div>
                </div>
                <div className="port">
                    {
                        portCount === 0 ? <div className="product">not Portfolio </div> :
                            <>
                            {
                                portloading ? <>Loading</> :
                                portHome.map((items) => {
                                return (
                                    <a href={`http://${items.link}`} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                                        <div className="images" key={items._id}>
                                            <img src={`${links}/images/portfolio/${items.imagePort.fileName}`} alt="" />
                                        </div>
                                        <h3>{items.title.uz}</h3>
                                        <p>{items.description.uz}</p>
                                    </a>
                                )
                            })
                            }
                            </>
                    }
                </div>
            </div>
            <div className="items">
                <div className="blog">
                    <div className="dail">
                        <h3>Blog</h3>
                        <p>Added blogs</p>
                        <h5><BsArrowUp className="top" />{blogCount}</h5>
                    </div>
                </div>
                <div className="port">
                    {
                         blogCount === 0 ? <div className="product">not Portfolio </div> :
                         <>
                         {
                             blogloading ? <>Loading</> :
                              blogHome.map((items) => {

                            let descriptionContinue = '';
                            let continueText = '';

                            for (let i = 0; i < items.description.length; i++) {
                                if (i < 20) {
                                    descriptionContinue += items.description[i];
                                } else {
                                    continueText = '...';
                                    break;
                                }
                            }

                           return (
                            <div className="blogs" key={items._id}>
                            <img src={`${links}/images/blog/${items.imageBlog.fileName}`} alt="" />
                            <div className="lorem">
                                <div className="date">{items.date.substring(0, 10)}</div>
                                <div className="title">{items.title}</div>
                                <p>{descriptionContinue}{continueText}</p>
                            </div>
                            </div>
                           )
                        })
                         }
                        </>
                    }
                   
                </div>
            </div>
            <div className="items">
                <div className="blog">
                    <div className="dail">
                        <h3>Account</h3>
                        <p>Added accounts</p>
                        <h5><BsArrowUp className="top" />{userCount}</h5>
                    </div>
                </div>
                <div className="port">
                    {
                        userCount === 0 ? <div className="product">not Account</div> :
                            <>
                            {
                                accountloading ? <>Loading</> : 
                                userHome.map((items) => {
                                return (
                                    <div className="news" key={items._id}>
                                        <div className="users"><FaUserCircle className="userfa" /> {items.login}</div>
                                    </div>
                                )
                            })
                            }
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
