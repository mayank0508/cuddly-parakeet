import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsApp = () => (
  <div>
    <h1>HATS APP</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <Link to="/">Homepage</Link>
      <Link to="/hats">HatsApp/</Link> */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/hats" element={<HatsApp />} />
      </Routes>
    </div>
  );
}

export default App;
