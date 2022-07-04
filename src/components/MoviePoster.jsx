import React from 'react'
import { useNavigate } from "react-router-dom";
import './MoviePoster.styles.css'

const MoviePoster = ({ movie }) => {
  const navigate = useNavigate();
  const image_path = 'https://image.tmdb.org/t/p/w500'

  return (
    <>
      <div
        className="poster"
        onClick={() => navigate(`/details/${movie.id}`)}
        style={{
          backgroundImage: `url(${image_path}${movie.poster_path})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
    </>
  )
}

export default MoviePoster
