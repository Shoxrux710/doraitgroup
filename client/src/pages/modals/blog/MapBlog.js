import React, { useState } from 'react'
import follow from '../../../img/follow.png'
import followedImg from '../../../img/followed.png'
import like from '../../../img/like.png'
import like2 from '../../../img/like2.png'
import panda from '../../../img/panda.png'
import instagram from '../../../img/ins.png'
import telegram from '../../../img/tel.png'
import facebook from '../../../img/fac.png'
import havola from '../../../img/havola.png'
import socials from '../../../img/socials.png'
import { useTranslation } from 'react-i18next'

const MapBlog = (props) => {

    const {userId, title, description, imageBlog} = props
    const { t } = useTranslation()
    
  const [liked, setLiked] = useState(false)
  const [followed, setFollowed] = useState(false)
  const [liked2, setLiked2] = useState(false)
  const [open, setOpen] = useState(false)

  const isLiked = liked ? like2 : like
  const isLiked2 = liked2 ? like2 : like
  const isFollowed = followed ? followedImg : follow

  const openSocials = open ? 'socials-wrapper socials-wrapper-active' : 'socials-wrapper'

    return (
        <>
              <div className='top'>
                <div>
                  <img src={panda} alt='img' />
                  <h3>{userId.name}</h3>
                  <p>0 {t('blog.follower')}</p>
                </div>
                <div>
                  <img src={isFollowed} alt='follow' onClick={() => setFollowed(!followed)} />
                </div>
              </div>

              <div className='blog-body'>
                <div className='bg-img' style={{backgroundImage: `url(/blog/${imageBlog.fileName})`}}>
                </div>
                <div className='right-texts'>
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>

              <div className='like-dislike'>
                <div></div>
                <div className='img-wrap'>
                  <img src={isLiked} onClick={() => setLiked(!liked)} alt='like' />
                  <img src={isLiked2} onClick={() => setLiked2(!liked2)} alt='like' />
                  <img src={socials} alt='like' onClick={() => setOpen(!open)} />
                  <div className={openSocials} >
                    <a href='/'>
                      <img src={instagram} alt="instagram" />
                      <span>Instagram</span>
                    </a>
                    <a href='/'>
                      <img src={telegram} alt="instagram" />
                      <span>Telegram</span>
                    </a>
                    <a href='/'>
                      <img src={facebook} alt="instagram" />
                      <span>Facebook</span>
                    </a>
                    <a href='/'>
                      <img src={havola} alt="instagram" />
                      <span>Havola</span>
                    </a>
                  </div>
                </div>
              </div>
            </>
    )
}

export default MapBlog
