import React from 'react';

import './sign-in-and-signup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.component';

const SignINandSignUP = () => (
  <div className="sign-in-and-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignINandSignUP;
