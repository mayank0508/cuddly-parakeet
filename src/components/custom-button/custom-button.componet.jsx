import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} // this part was not thought in the lectures but addition of the isGoogleSignIn is prop is the
    {...otherProps}                                                       // the reson that button works
  >
    {children}
  </button>
);

export default CustomButton;
