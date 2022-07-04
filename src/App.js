import React, {Component} from 'react'
import { Routes, Route } from 'react-router-dom'
import TrendingPage from './pages/Trending Page/TrendingPage.jsx'
import DetailsPage from './pages/Details Page/DetailsPage.jsx';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<TrendingPage />} />
        <Route exact path="/details/:id" element={<DetailsPage />} />
      </Routes>
    );
  };
}

export default App
