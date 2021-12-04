import React, {useState} from 'react'
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineMore } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';

const AccountId = (props) => {
    const {users, blogsLangth, onDelete} = props
    
    const [show, setShow] = useState(false);

    const oneDelete = (id) => {
        onDelete(id)
        setShow(false)
    }
    
    return (
        <tr>
            <td>{users.login}</td>
            <td>{users.email}</td>
            <td>{users.name}</td>
            <td>{blogsLangth}</td>
            <td className="deletes">
                <AiOutlineMore
                className="delete"
                onClick={() => setShow(!show)}
                />
                <div className={show ? 'blogs active' : 'blogs'}>
                   {
                       users.instagram ? <p><a href={`http://instagram.com/${users.instagram}`}><FiInstagram/> Instagram</a></p> : ''
                   } 
                   {
                       users.telegram ? <p><a href={`http://t.me/${users.telegram}`}><FaTelegram/> Telegram</a></p> : ''
                   }
                   {
                       users.facebook ? <p><a href={`http://facebook.com/${users.facebook}`}><BsFacebook/> Facebook</a></p> : ''
                   }
                    <p
                    onClick={() => oneDelete(users._id)}
                    ><RiDeleteBinLine/> Delete</p>
                </div>
                </td>
        </tr>
    )
}

export default AccountId
