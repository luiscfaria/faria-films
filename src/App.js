import React, {Component} from 'react'
import { Routes, Route } from 'react-router-dom'
import TrendingPage from './Trending Page/TrendingPage.jsx'

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<TrendingPage />} />
      </Routes>
    );
  };
}

export default App
