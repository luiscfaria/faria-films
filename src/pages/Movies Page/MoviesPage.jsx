import React, { useEffect, useState } from 'react'
import MoviePoster from '../../components/MoviePoster.jsx'
import './MoviesPage.styles.css'

const MoviesPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const url =
      'https://api.themoviedb.org/3/tv/popular?api_key=95b640c810615585379ac1368f019908&language=en-US&page=1'

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        setData(json.results)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className='trending-page'>
      <h1>Popular Movies</h1>
        <div className="posters-container">
          {data.map((movie) => (
            <MoviePoster movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoviesPage
