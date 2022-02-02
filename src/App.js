import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componet.jsx';
import Header from './components/header/header.component.jsx';
import SignINandSignUP from './pages/sign-in-and-signup/sign-in-and-signup.component.jsx';
import { auth, createUserProfileDoc } from './firebase/firebase.utils'; // we are importing auth from firebase to make the web ui know that we are logged in

class App extends React.Component {
  constructor() {
    // this was intillaly a function but just beacuse of the auth function we have converted it into a class component
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null; // this is used to unsubscribe

  componentDidMount() {
    // this is a very cool firebase function which allows user to stay loged in until they are logged out
    auth.onAuthStateChanged(async user => {
      createUserProfileDoc(user)
      // this.setState({ currentUser: user });

      //console.log(user);
    });
  }

  componentWillUnmount() {
    // this is called for logging out form the suscribed state
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <Link to="/">Homepage</Link>
      <Link to="/hats">HatsApp/</Link> */}
        <Header currentUser={this.state.currentUser} />{' '}
        {/* here we are passing the current user in the header */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignINandSignUP />} />
        </Routes>
      </div>
    );
  }
}

export default App;
