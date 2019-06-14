import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    error: null,
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:3300/api/register';
    const { username, password } = this.state;
    axios
      .post(endpoint, { username, password })
      .then(res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/');
      })
      .catch(({ response }) => {
        console.error('ERROR', response);
        if (response.data.errno === 19) {
          this.setState({ error: 'That username is already registered' });
        }
      });
  };

  render() {
    return (
      <div className="auth">
        <div className="auth-card">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Enter a username"
              name="username"
              autoComplete="off"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />

            <input
              placeholder="Enter a password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
            <button type="submit">Register</button>
          </form>
          <div className="auth-text">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
        {this.state.error && (
          <div className="auth-error">{this.state.error}</div>
        )}
      </div>
    );
  }
}

export default SignUp;