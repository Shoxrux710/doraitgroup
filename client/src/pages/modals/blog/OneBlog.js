import React from 'react'

import MapBlog from './MapBlog'

export const OneBlog = (props) => {

  const { oneBlog } = props

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
