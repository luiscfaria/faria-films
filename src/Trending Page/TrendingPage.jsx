import React, {useEffect, useState} from 'react'

const TrendingPage = () => {
    const [data, setData] = useState([])
  
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/trending/all/day?api_key=95b640c810615585379ac1368f019908"

    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          setData(json.results)
      } catch (error) {
          console.log("error", error);
      }
  };

  fetchData()
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {data.map(movie => 
        <span>{movie.original_title}</span> 
      )}
    </div>
  )
}

export default TrendingPage
