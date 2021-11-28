import React, { useState } from 'react'
// import socials from '../../../img/socials.png'
// import panda from '../../../img/panda.png'
import follow from '../../../img/follow.png'
import followedImg from '../../../img/followed.png'
import like from '../../../img/like.png'
import like2 from '../../../img/like2.png'
// import instagram from '../../../img/ins.png'
// import telegram from '../../../img/tel.png'
// import facebook from '../../../img/fac.png'
// import havola from '../../../img/havola.png'
import MapBlog from './MapBlog'

export const OneBlog = (props) => {

  const { oneBlog } = props

  const [liked, setLiked] = useState(false)
  const [followed, setFollowed] = useState(false)
  const [liked2, setLiked2] = useState(false)
  const [open, setOpen] = useState(false)

  const isLiked = liked ? like2 : like
  const isLiked2 = liked2 ? like2 : like
  const isFollowed = followed ? followedImg : follow

  const openSocials = open ? 'socials-wrapper socials-wrapper-active' : 'socials-wrapper'

  return (
    <div className='one-blog'>
      {
        oneBlog.map((items, index) => {
          return (
           <MapBlog  key={index} {...items}/>
          )
        })
      }
    </div>

  )
}
