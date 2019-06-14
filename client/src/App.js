import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Jokes from './components/Jokes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <nav>
            <NavLink to="/jokes">Jokes</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </nav>
        </header>
        <main>
          <Route path="/jokes" component={Jokes} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </main>
      </div>
    );
  }
}

export default App;
