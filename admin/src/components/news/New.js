import React, { useState, useEffect } from 'react'
import { BiPlusCircle } from 'react-icons/bi';
import { Tabs, Radio, Space } from 'antd';
import { Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify'
import {useHistory} from 'react-router-dom'
import NewsList from '../news-list';
import axios from '../../utils/axiosInterceptors';
import './new.css'

const New = (props) => {


    const { news, onDelete, id, newProduct } = props

    const { TabPane } = Tabs;
    const history = useHistory()
    const [titleUz, setTitleUz] = useState("")
    const [titleRu, setTitleRu] = useState("")
    const [titleEn, setTitleEn] = useState("")
    const [descriptionUz, setDescriptionUz] = useState("")
    const [descriptionRu, setDescriptionRu] = useState("")
    const [descriptionEn, setDescriptionEn] = useState("")
    const [imageNews, setImageNews] = useState(null)
    const [imagesUrl, setImagesUrl] = useState("")
    const [avatarFront, setAvatarFront] = useState(null);


    useEffect(() => {

        if (id){
            axios.get(`/api/news/all/${id}`)
            .then(response => {
                const {title, description, imageNews} = response.data.newsOne

                setTitleUz(title.uz)
                setTitleRu(title.ru)
                setTitleEn(title.en)
                setDescriptionUz(description.uz)
                setDescriptionRu(description.ru)
                setDescriptionEn(description.en)
                setImagesUrl(imageNews.fileName)

            }) 
        }

        
    },[id])



    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const method = id ? "put" : "post"
        const urlApi = id ? `/api/news/update/${id}` : `/api/news/all`

        axios[method](urlApi, formData)
            .then(response => {
                setTitleUz("")
                setTitleRu("")
                setTitleEn("")
                setDescriptionUz("")
                setDescriptionRu("")
                setDescriptionEn("")
                setImageNews(null)
                setAvatarFront(null)
                setImagesUrl("")
                newProduct()
                toast.success(response.data.successMessage)
                history.push('/admin/news')
            })
            .catch(err => {
                toast.error(err.response.data.errorMessage)
            })
    }

    let avatarImg;
    if (imagesUrl && !avatarFront){
        avatarImg = `/news/${imagesUrl}`
    } else if(avatarFront) {
        avatarImg = URL.createObjectURL(avatarFront);
    } else {
        avatarImg = "https://image.jimcdn.com/app/cms/image/transf/none/path/s282e5c140bd19b68/image/if276da1f9640480b/version/1580646418/image.png"
    }


    return (
        <div className="new">
            <div className="left_new">
                <form onSubmit={onSubmit}>
                    <div className="form-file">
                        <label><BiPlusCircle className="fa" /> <span>Images...</span> </label>
                        <input
                            type="file"
                            name="imageNews"
                            files={imageNews}
                            onChange={(e) => {
                                setImageNews(e.target.files)
                                const file = Array.from(e.target.files);
                                setAvatarFront(file[0]);
                            }}
                            
                        />
                    </div>
                    <div className="image">
                        <img src={avatarImg} alt="" />
                    </div>
                    <div className="space">
                        <Space>
                            <Radio.Group value={'right'} >
                            </Radio.Group>
                        </Space>
                        <Tabs tabPosition={'right'}>
                            <TabPane tab="uz" key="1">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="titleUz"
                                        value={titleUz}
                                        placeholder="Title..."
                                        onChange={(e) => setTitleUz(e.target.value)}
                                    />

                                </div>
                                <div className="control">
                                    <textarea
                                        name="descriptionUz"
                                        value={descriptionUz}
                                        placeholder="Text.."
                                        onChange={(e) => setDescriptionUz(e.target.value)}
                                    />
                                </div>
                            </TabPane>
                            <TabPane tab="ru" key="2">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="titleRu"
                                        value={titleRu}
                                        placeholder="Title..."
                                        onChange={(e) => setTitleRu(e.target.value)}
                                    />

                                </div>
                                <div className="control">
                                    <textarea
                                        name="descriptionRu"
                                        value={descriptionRu}
                                        placeholder="Text.."
                                        onChange={(e) => setDescriptionRu(e.target.value)}
                                    />
                                </div>
                            </TabPane>
                            <TabPane tab="en" key="3">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="titleEn"
                                        value={titleEn}
                                        placeholder="Title..."
                                        onChange={(e) => setTitleEn(e.target.value)}
                                    />

                                </div>
                                <div className="control">
                                    <textarea
                                        name="descriptionEn"
                                        value={descriptionEn}
                                        placeholder="Text.."
                                        onChange={(e) => setDescriptionEn(e.target.value)}
                                    />
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                    <button
                        type="submit"
                    >
                        save
                    </button>
                
                </form>
            </div>
            <div className="right_new">
                <Container>
                    <Row>
                    <NewsList news={news} onDelete={onDelete} />
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default New
