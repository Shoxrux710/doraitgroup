import { useState, useEffect } from 'react'
import { BiPlusCircle } from 'react-icons/bi';
import { Tabs, Radio, Space } from 'antd';
import { toast } from 'react-toastify'
import {useHistory} from 'react-router-dom'
import axios from '../../utils/axiosInterceptors'
import PortItems from './PortItems'
import './portfolio.css'

const Portfolio = (props) => {

    const {port, deleteOne, id, portProduct} = props

    const { TabPane } = Tabs;
    const history = useHistory()

    const [titleUz, setTitleUz] = useState("")
    const [titleRu, setTitleRu] = useState("")
    const [titleEn, setTitleEn] = useState("")
    const [descriptionUz, setDescriptionUz] = useState("")
    const [descriptionRu, setDescriptionRu] = useState("")
    const [descriptionEn, setDescriptionEn] = useState("")
    const [imagePort, setImagePort] = useState(null)
    const [avatarFront, setAvatarFront] = useState(null);
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
       
        if (id){
            axios.get(`/api/port/all/${id}`)
            .then(response => {
                const {title, description, imagePort } = response.data.onePort
                console.log(response.data.onePort);
                setTitleUz(title.uz)
                setTitleRu(title.ru)
                setTitleEn(title.en)
                setDescriptionUz(description.uz)
                setDescriptionRu(description.ru)
                setDescriptionEn(description.en)
                setImageUrl(imagePort.fileName)
            })
        }

    }, [id])

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const method = id ? "put" : "post"
        const urlApi = id ? `/api/port/update/${id}` : `/api/port/all`
        
        axios[method](urlApi, formData)
              .then(response => {
                setTitleUz("")
                setTitleRu("")
                setTitleEn("")
                setDescriptionUz("")
                setDescriptionRu("")
                setDescriptionEn("")
                setImagePort(null)
                setAvatarFront(null)
                setImageUrl("")
                portProduct()
                toast.success(response.data.successMessage)
                history.push('/admin/portfolio')
              })  
              .catch(err => {
                toast.error(err.response.data.errorMessage)
              })

    }

    let avatarImg

    if (imageUrl && !avatarFront){
        avatarImg = `/portfolio/${imageUrl}`
    }
    else if(avatarFront){
        avatarImg = URL.createObjectURL(avatarFront);
    }else{
        avatarImg = "https://image.jimcdn.com/app/cms/image/transf/none/path/s282e5c140bd19b68/image/if276da1f9640480b/version/1580646418/image.png"
    }

    return (
        <div className="portfolio">
                <div className="left_port">
                <form onSubmit={onSubmit}>
                    <div className="form-file">
                        <label><BiPlusCircle className="fa" /> <span>Portfolio...</span> </label>
                        <input
                            type="file"
                            name="imagePort"
                            files={imagePort}
                            onChange={(e) => {
                                setImagePort(e.target.files)
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
                            <TabPane tab="uz" key="4">
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
                            <TabPane tab="ru" key="5">
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
                            <TabPane tab="en" key="6">
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
                    <button type="submit">
                        save
                    </button>
                
                </form>
            </div>
            <div className="right_port">
                <PortItems port={port} deleteOne={deleteOne}/>
            </div>
        </div>
    )
}

export default Portfolio
