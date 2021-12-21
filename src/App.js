import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componet.jsx';
import Header from './components/header/header.component.jsx';
import SignINandSignUP from './pages/sign-in-and-signup/sign-in-and-signup.component.jsx';

function App() {
  return (
    <div>
      {/* <Link to="/">Homepage</Link>
      <Link to="/hats">HatsApp/</Link> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/signin" element={<SignINandSignUP />} />
      </Routes>
    </div>
  );
}

export default App;
