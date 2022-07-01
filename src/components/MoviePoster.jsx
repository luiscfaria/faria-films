import React from 'react'
import './MoviePoster.styles.css'

const MoviePoster = ({movie}) => {

    const image_path = 'https://image.tmdb.org/t/p/w500'
 
  return (
    <div className='poster' style={{
        backgroundImage: `url(${image_path}${movie.poster_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        }}>
    </div>
  )
}

export default MoviePoster
