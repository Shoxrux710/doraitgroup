import React, { useState } from 'react'
import { AiOutlineMore } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';
import { Link } from 'react-router-dom'

const Port = (props) => {

    const { title, description, link, imagePort, _id, deleteOne } = props

    const [show, setShow] = useState(false);

    const oneDelete = (id) => {
        deleteOne(id)
        setShow(false)
    }

    return (
        <div className="items">
            <div className="port">
                <AiOutlineMore
                    className="fa"
                    onClick={() => setShow(!show)}
                />
                <div
                    className={show ? "position active" : "position"}
                >
                    <Link to={`/admin/portfolio/${_id}`} className="update"
                        onClick={() => setShow(false)}
                    ><BiPencil /> Tekshirish</Link>
                    <p
                        className="delete"
                        onClick={() => oneDelete(_id)}
                    ><RiDeleteBin6Line /> O'chirish</p>
                </div>
                <a href={`http://${link}`} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                <img src={`/portfolio/${imagePort.fileName}`} alt="" />
                </a>
            </div>
            <h3>{title.uz}</h3>
            <p>{description.uz}</p>
        </div>
    )
}

export default Port
