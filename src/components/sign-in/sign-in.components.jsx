import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.componet';
import './sign-in.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils'; // this the module at which we setup the firebase docs

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already you have a account</h2>
        <span>Sign with your real email id and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email" // this is the hover transition
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.email} // here handleChange={this.handleChange} is that the moment the submit button is clicked what appears !
            handleChange={this.handleChange}
            label="Password" // this is the hover transition
            required
          />
          <CustomButton type="submit">Sign IN 👍</CustomButton>
          <CustomButton onClick={signInWithGoogle}>{''}Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
