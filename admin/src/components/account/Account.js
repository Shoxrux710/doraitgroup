import React, {useState} from 'react'
import { Table } from 'react-bootstrap';
import { Pagination } from 'antd'
import AccountId from './AccountId'
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
                                            <AccountId 
                                            key={item._id}
                                            {...item}
                                            onDelete={onDelete}
                                            />
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
