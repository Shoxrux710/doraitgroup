import React, { useState, useEffect } from 'react'
import './blog.css'
import uchburchak from '../../../img/uchburchak.png'
import blog from '../../../img/blog.png'
import panda from '../../../img/panda.png'
import myBlog from '../../../img/my-blog.png'
import writingBlog from '../../../img/writing-blog.png'
import axios from 'axios'
// import uploadR from '../../../img/uploadR.png'
// import h2 from '../../../img/h2.png'
// import h3 from '../../../img/h3.png'
// import liner from '../../../img/liner.png'
// import s from '../../../img/s.png'
// import i from '../../../img/i.png'
// import bold from '../../../img/bold.png'
// import follow from '../../../img/follow.png'
// import followedImg from '../../../img/followed.png'
// import like from '../../../img/like.png'
// import like2 from '../../../img/like2.png'
// import notification from '../../../img/notification.png'
import garbage from '../../../img/garbage.png'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { OneBlog } from './OneBlog'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Blog = (props) => {

  const { t } = useTranslation()

  const { setOpenModal, setVisible } = props
  const { token } = useSelector(state => state.userLogin)

  let links = window.location.pathname ? "http://localhost:4008" : ''


  const [imageBlog, setImageBlog] = useState(null);
  const [imgFilesUrl, setImgFilesUrl] = useState('');
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [styles, setStyles] = useState('')
  const [data, setData] = useState({})
  const [blogMy, setBlogMy] = useState([])
  const [oneBlog, setOneBlog] = useState([])
  const [userImg, setUserImg] = useState(null)
  const history = useHistory()

  const productBlog = (token) => {
    axios.get('/api/client/data', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setData(response.data.name)
        setBlogMy(response.data.blogs)
      })
  }

  const deleteBlogs = (id) => {
    axios.delete(`/api/blog/delete/${id}`)
          .then(response => {
            toast.success(response.data.successMessage)
            productBlog(token)
          }).catch(err => {
            toast.error(err.response.data.errorMessage)
          })
  }

  const userBlogs = (token) => {
    axios.get('/api/client/all/put', {
      headers: {
        'authorization': `Bearer ${token}`
    }
    })
    .then(response => {
      setUserImg(response.data.user.imagesUser)
    })   
  }

  const images = userImg ? userImg.fileName : null

  useEffect(() => {
    productBlog(token)
    userBlogs(token)
  }, [token])

  useEffect(() => {
     axios.get('/api/blog/all?skip=0&limit=0')
           .then(response => {
            setOneBlog(response.data.blogs)
           }) 
  }, [])


  const handler = (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    if (!imageBlog) return; 
    formData.append('imageBlog', imageBlog[0]);
    formData.append('title', title);

    axios.post('/api/blog/all', formData, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((response) => {
      toast.success(response.data.successMessage)
      history.push('/then')
    })
      .catch((err) => {
        toast.error(err.response.data.errorMessage)
      })
  }

  const getUrl = (e) => {
    const files = Array.from(e.target.files);
    setImgFilesUrl(URL.createObjectURL(files[0]));
    setImageBlog(e.target.files);
  }

  const getSarlavha = (e) => {
    setTitle(e.target.value)
  }

  const toEdit = () => {
    if (title.length > 0 && imgFilesUrl) {
      setInnerData('tahrirlash')
    }
  }

  const deleteBlog = () => {
    setTitle('')
    setImageBlog(null)
  }

  // ................................................................ \\

  const wrapper = (
    <div className='wrapper'>
      <div className='square' onClick={() => setInnerData('addItem')}>
        <img src={writingBlog} alt='writing blog' />
        <h5>{t('blog.write')}</h5>
      </div>
      <div className='square' onClick={() => setInnerData('allBlogs')}>
        <img src={blog} alt='writing blog' />
        <h5>{t('blog.blogs')}</h5>
      </div>
      <div className='square' onClick={() => setInnerData('myBlogs')}>
        <img src={myBlog} alt='writing blog' />
        <h5>{t('blog.my_blog')}</h5>
      </div>
    </div>
  )

  const addItem = (
    <div className='nashr' >
      <div className='top-nashr'>
        <div className='left'>
          {
            images ? <img src={`${links}/images/user/${images}`} alt='' /> : <img src={panda} alt='' />
          }
          <h3>{data}</h3>
        </div>
        <div className='right'>
          <button onClick={deleteBlog}>{t('blog.delete')}</button>
          <button onClick={toEdit}>{t('blog.do')}</button>
        </div>
      </div>

      <div className='input-wrap'>
        <input
          type="text"
          placeholder='SARLAVHA'
          name={title}
          value={title}
          onChange={getSarlavha}
        />
        <div>
          <input
            type='file'
            id='file'
            name="imageBlog"
            files={imageBlog}
            onChange={getUrl}
          />
        </div>
      </div>

      {
        setImageBlog ? <img src={imgFilesUrl} alt="" /> : null
      }

    </div>
  )

  const tahrirlash = (
    <div className='tahrir'>
      <div className='top-nashr'>
        <div className='left'>
        {
            images ? <img src={`${links}/images/user/${images}`} alt='avatar' /> : <img src={panda} alt='avatar' />
          }
          <h3>{data}</h3>
        </div>
        <div className='right'>
          <button onClick={() => setInnerData('addItem')}>{t('blog.back')}</button>
          <button onClick={() => { setInnerData('tahrirlash'); setOpenModal(false); setVisible(false) }} >{t('blog.joylash')}</button>
        </div>
      </div>
      <div className='body-part'>
        <div className='texts'>
          <h1>{title}</h1>
          <img src={imgFilesUrl} alt='img' />
          <textarea
            type='text'
            placeholder='Tavsif qo`shing'
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }} />
          <p className='p' >{description}</p>
        </div>
      </div>
    </div>
  )

  const allBlogs = (
    <div className='all-blogs'>
      <OneBlog oneBlog={oneBlog} images={images} />
    </div>
  )

  const myBlogs = (
    <div>
      <div className='user-panel'>
        <div className='inner-user'>
        {
            images ? <img src={`${links}/images/user/${images}`} alt='avatar' /> : <img src={panda} alt='avatar' />
          }
          <h3>{data}</h3>
        </div>
        <div className='number-follower-wrap'>
          <div>
            <p>0</p>
            <span>{t('blog.nashrlar')}</span>
          </div>
          <div>
            <p>0</p>
            <span>{t('blog.follower')}</span>
          </div>
          <div>
            <p>0</p>
            <span>{t('blog.follow_back')}</span>
          </div>
        </div>
        {/* <div className='notif'>
          <img src={notification} alt='notification' />
        </div> */}
      </div>

      <div className='one-blog'>
        <div className='top'>
          <div>
          {
            images ? <img src={`${links}/images/user/${images}`} alt='avatar' /> : <img src={panda} alt='avatar' />
          }
            <h3>{data}</h3>
          </div>
        </div>

        <div className='blog-body myblog'>
          {
            blogMy.map((items,index) => {
              return (
                <div className='inner-blog-body' key={index}>

                 {/* <div className='bg-img' style={{backgroundImage: `url(${links}/images/blog/${items.imageBlog.fileName})`}}></div> */}

                 <img className='bg-img' src={`${links}/images/blog/${items.imageBlog.fileName}`} alt="" />
                  <div className='right-texts' key={items._id}>
                    <h1>{items.title}</h1>
                    <p>{items.description}</p>
                  </div>
                  
                  <div 
                  className='delete-blog'
                  onClick={() => deleteBlogs(items._id)}
                  >
                    <img src={garbage} alt='delete' />
                  </div>
                </div>
              )
            })
          }          
        </div>
      </div>
    </div>
  )


  const [innerData, setInnerData] = useState('wrapper')

  const top = innerData !== 'wrapper' ? 'top top-activ' : 'top'

  const wrapperActive = innerData === 'wrapper' ? wrapper : null
  const addItemActive = innerData === 'addItem' ? addItem : null
  const tahrirlashActive = innerData === 'tahrirlash' ? tahrirlash : null
  const allBlogsActive = innerData === 'allBlogs' ? allBlogs : null
  const myBlogsActive = innerData === 'myBlogs' ? myBlogs : null

  return (
    <form
      onSubmit={handler}
      className='blogs-modal'>
      <div className={top}>
        <div>
          <img src={uchburchak} alt='uchburchak' />
          <span>{t('blog.blogs')}</span>
        </div>
        <div className='line'></div>
      </div>
      {wrapperActive}
      {addItemActive}
      {tahrirlashActive}
      {allBlogsActive}
      {myBlogsActive}
    </form>
  )
}

export default Blog