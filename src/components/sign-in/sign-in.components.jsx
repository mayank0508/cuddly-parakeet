import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h2>Already you have a account</h2>
        <span>Sign with your real email id and password</span>

        <form>
          <input name="email" type="email" value={this.state.email} required />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <label>Email</label>
          <input type="submit" value="Subit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
