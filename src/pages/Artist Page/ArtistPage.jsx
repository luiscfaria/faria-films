import React, { useEffect, useState } from 'react'
import ArtistPoster from '../../components/ArtistPoster.jsx'
import './ArtistPage.styles.css'

const ArtistsPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const url =
      'https://api.themoviedb.org/3/person/popular?api_key=95b640c810615585379ac1368f019908&language=en-US&page=1'

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
      <h1>Popular Artists This Year</h1>
        <div className="posters-container">
          {data.map((artist) => (
            <ArtistPoster artist={artist} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtistsPage
