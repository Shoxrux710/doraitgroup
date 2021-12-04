import React from 'react'
// import { IoMdEye } from 'react-icons/io'


const Items = (props) => {

    const { blogsId, id, blogCount } = props

    const blogs = id ? (
                    <>
                        <div className="top" >
                            <p>Bloglar soni <span>{blogCount} ta</span></p>
                            <p>Umumiy tomoshabinlar soni<span>100k</span></p>
                        </div >
                        <div className="scroll">
                            {
                                blogsId.map((items, index) => {
                                    return (
                                        <div className="items" key={index}>
                                            <img src={`http://localhost:3001/blog/${items.imageBlog.fileName}`} alt="" />
                                            <div className="lorem">
                                                <div className="date">{items.date.substring(0, 10)}</div>
                                                <div className="title">{items.title}</div>
                                                <p>{items.description}</p>
                                                {/* <div className="view"><IoMdEye /> {items.view}</div> */}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                ) : (
                    <div className="product">
                        <img src="https://ddx5i92cqts4o.cloudfront.net/images/1cu9r7to9_White-Box-Testing.jpg" alt="" />
                    </div>
                )

    return (
        <div className="blog_items">
            {blogs}
        </div >

    )
}

export default Items
