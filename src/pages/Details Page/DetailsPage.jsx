import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailsPage.styles.css'

const DetailsPage = () => {
  const { id } = useParams()
  
  const image_path = 'https://image.tmdb.org/t/p/w500'

  const [data, setData] = useState([])

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=95b640c810615585379ac1368f019908`

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        setData(json)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="details-page">
        <h1 onClick={() => console.log(data)}>{data.title}</h1>
        <div className="details-container">
          <div className='poster-container'
          style={{
            backgroundImage: `url(${image_path}${data.poster_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}></div>
          <div className='info-container'></div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
