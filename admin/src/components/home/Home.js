import React from 'react'
import { MdDateRange } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { BsArrowUp } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io'
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

    return (
        <div className="homes">
            <div className="items">
                <div className="blog">
                    <div className="dail">
                        <h3>News</h3>
                        <p>Daily views</p>
                        <h5><BsArrowUp className="top" /> 100</h5>
                        <p>Daily news</p>
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
                                            <img src={`/news/${items.imageNews.fileName}`} alt="" />
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
                        <p>Monthly viewed Portfolio</p>
                        <h5><BsArrowUp className="top" /> 100</h5>
                        <p>Portfolio viewed monthly</p>
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
                                    <>
                                        <div className="images" key={items._id}>
                                            <img src={`/portfolio/${items.imagePort.fileName}`} alt="" />
                                        </div>
                                        <h3>{items.title.uz}</h3>
                                        <p>{items.description.uz}</p>
                                    </>
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
                        <p>Daily added blogs</p>
                        <h5><BsArrowUp className="top" /> 100</h5>
                        <p>Daily viewed blogs</p>
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
                            <img src={`http://localhost:3001/${items.imageBlog.fileUrl}`} alt="" />
                            <div className="lorem">
                                <div className="date">{items.date.substring(0, 10)}</div>
                                <div className="title">{items.title}</div>
                                <p>{descriptionContinue}{continueText}</p>
                                <div className="view"><IoMdEye />{items.view}</div>
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
                        <p>Daily added accounts</p>
                        <h5><BsArrowUp className="top" /> 100</h5>
                        <p>Monthly added accounts</p>
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
