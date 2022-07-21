import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import TrendingPage from './pages/Trending Page/TrendingPage.jsx'
import MoviesPage from './pages/Movies Page/MoviesPage.jsx'
import SeriesPage from './pages/Series Page/SeriesPage.jsx'
import ArtistsPage from './pages/Artist Page/ArtistPage.jsx'
import DetailsPage from './pages/Details Page/DetailsPage.jsx'
import './App.css'

import Header from './components/Header.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<TrendingPage />} />
          <Route exact path="/movies" element={<MoviesPage />} />
          <Route exact path="/series" element={<SeriesPage />} />
          <Route exact path="/artists" element={<ArtistsPage />} />
          <Route exact path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </>
    )
  }
}

export default App
