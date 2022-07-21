import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MoviePoster.styles.css'

const ArtistPoster = ({ artist }) => {
  const navigate = useNavigate()
  const image_path = 'https://image.tmdb.org/t/p/w500'

  return (
    <>
      <div 
          style={{
            marginTop: '0.8rem',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
          }}>
        <div
          className="poster"
          // onClick={() => navigate(`/details/${movie.id}`)}
          style={{
            backgroundImage: `url(${image_path}${artist.profile_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            marginBottom: '0'
          }}
        ></div>
        <div style={{fontSize: '1.5rem', margin: '0'}}>{artist.name}</div>
      </div>
    </>
  )
}

export default ArtistPoster
