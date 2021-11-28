import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import New from './New'
import axios from '../../utils/axiosInterceptors'

const NewAll = (props) => {

  const [news, setNews] = useState([])

  const newProduct = () => {
    axios.get(`/api/news/all/?skip=0&limit=0`)
      .then(response => {
        setNews(response.data.news) 
      })
  }

  const onDelete = (id) => {
    axios.delete(`/api/news/delete/${id}`)
      .then(response => {
        toast.success(response.data.successMessage)
        newProduct()
      }).catch(err => {
        toast.error(err.response.data.errorMessage)
      })
  }

  useEffect(() => {
    newProduct()
  }, [])

  return (
    <div>
      <New
        news={news}
        id={props.match.params.id}
        onDelete={onDelete}
        newProduct={newProduct}
      />
    </div>
  )
}

export default NewAll
