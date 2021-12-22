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
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password} // here value={this.state.password} and onChange={this.handleChange} are kinda doing the same thing
            onChange={this.handleChange} // the only diffrence is that the one in the bottom is using a function to add the values dynamically
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
