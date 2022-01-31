import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from './../../firebase/firebase.utils'; // this is imported here to use it to signout
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = (
  { currentUser } // here we have destructured the current user so that we can use it in sign in and sign out
) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">SIGN IN</Link>
      )}
    </div>
  </div>
);

export default Header;
