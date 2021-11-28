import React, { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineEye, AiOutlineMore } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';
import {Link} from 'react-router-dom'

import './news-list-item.css';

const NewsListItem = (props) => {

    const [show, setShow] = useState(false);
    const { imageNews, date, view, description, _id, onDelete } = props;




    const deleteOne = (id) => {
        onDelete(id)
        setShow(false)
        console.log("id", id);
    }

    let descriptionContinue = '';
    let continueText = '';

    for (let i = 0; i < description.uz.length; i++) {
        if (i < 40) {
            descriptionContinue += description.uz[i];
        } else {
            continueText = '...';
            break;
        }
    }

    return (
        <div className="news-list-item">
            <img src={`/news/${imageNews.fileName}`} alt="" />
           
            <div className="lorem">
                <div className="date">
                    <div className="date_one">
                        <MdDateRange className="fa" /> <span>{date.substring(0,10)}</span>
                    </div>
                    <span className="line"></span>
                    <div className="date_two">
                        <AiOutlineEye className="fa" /> <span>{view}</span> 
                            <AiOutlineMore 
                            className="on"
                            onClick={() => setShow(!show)}
                            />
                            <div 
                            className={show ? "position active" : "position"}                                        
                            >
                                <Link to={`/admin/news/${_id}`} className="update"
                                onClick={() => setShow(false)}
                                ><BiPencil/> Tekshirish</Link>
                                <p
                                onClick={() => deleteOne(_id)}
                                ><RiDeleteBin6Line/> O'chirish</p>
                            </div>
                    </div>
                </div>
                <p>{descriptionContinue}{continueText}</p>
           
            </div>
        </div>
    )
}

export default NewsListItem;