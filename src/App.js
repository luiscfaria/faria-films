import React, {useEffect} from 'react'

const App = () => {
  
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/trending/all/day?api_key=95b640c810615585379ac1368f019908"

    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
      } catch (error) {
          console.log("error", error);
      }
  };

  fetchData()

  })

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App

