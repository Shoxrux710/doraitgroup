import React from 'react';
import NewsListItem from '../news-list-item';


import './news-list.css';


const NewsList = (props) => {
    const { news, onDelete } = props;
    return (
        <div className="items-list">
           {/* <Row> */}
                {
                    news.map((item) => {
                        return <NewsListItem key={item._id} {...item} onDelete={onDelete} />
                    })
                }
            {/* </Row>     */}
        </div>
    )
}

export default NewsList;