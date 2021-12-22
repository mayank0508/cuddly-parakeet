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
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password} // here onChange={this.handleChange} is that the moment the submit button is clicked what appears !
            onChange={this.handleChange}
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
