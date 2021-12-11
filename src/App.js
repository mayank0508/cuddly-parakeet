import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componet.jsx';

function App() {
  return (
    <div>
      {/* <Link to="/">Homepage</Link>
      <Link to="/hats">HatsApp/</Link> */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
