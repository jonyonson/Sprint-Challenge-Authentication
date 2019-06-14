import React, { Component } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import Container from './Container';

class Jokes extends Component {
  state = {
    jokes: [],
  };

  componentDidMount() {
    const endpoint = 'http://localhost:3300/api/jokes';
    axiosWithAuth()
      .get(endpoint)
      .then(res => {
        console.log(res.data);
        const jokes = res.data;
        this.setState({ jokes });
      })
      .catch(error => {
        console.error('ERROR', error);
      });
  }
  render() {
    return (
      <Container>
        <ul className="joke-list">
          {this.state.jokes.map(joke => (
            <li className="joke-list-item" key={joke.id}>
              {joke.joke}
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default Jokes;
