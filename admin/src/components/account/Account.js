import React, {useState} from 'react'
import { Table } from 'react-bootstrap';
import { Pagination } from 'antd'
import { RiDeleteBinLine } from 'react-icons/ri';
import './account.css'

const Account = (props) => {

    const {loading, setSkip, count, account, onDelete} = props
    const [current, setCurrent] = useState(1)

    
    const onChange = page => {
        setCurrent(page);
        setSkip((page - 1) * 8);
    };

    return (
        <div className="home">
          <Table >
                    <thead>
                        <tr>
                            <th>Login</th>
                            <th>Gmail</th>
                            <th>To'liq ism</th>
                            <th>Blog</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? (
                                <tr>
                                    <td className="loading">Loading...</td>
                                </tr>
                            ) :
                                <>
                                    {account.map((item) => {

                                        return (
                                            <tr key={item.users._id}>
                                                <td>{item.users.login}</td>
                                                <td>{item.users.email}</td>
                                                <td>{item.users.name}</td>
                                                <td>{item.blogsLangth}</td>
                                                <td><RiDeleteBinLine
                                                onClick={() => onDelete(item.users._id)}
                                                className="delete" /></td>
                                            </tr>
                                        )
                                    })}
                                </>
                        }
                    </tbody>
                </Table>
                <Pagination 
                current={current} 
                defaultPageSize={8} 
                onChange={onChange} 
                total={count} />
        </div>
    )
}

export default Account
