import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import SearchFilter from './pages/SearchFilter';
import './styles/global.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/search/filter" element={<SearchFilter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
