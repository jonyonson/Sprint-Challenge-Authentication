import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Jokes from './components/Jokes';
import PrivateRoute from './auth/PrivateRoute';

class App extends Component {
  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="app">
        <header>
          <nav>
            {/* <NavLink activeClassName="active-navlink" to="/jokes">
              Jokes
            </NavLink> */}
            <div>
              <NavLink className="header-title" exact to="/">
                Dad Jokes
              </NavLink>
            </div>

            <div>
              {!localStorage.getItem('jwt') && (
                <>
                  <NavLink
                    className="navlink"
                    activeClassName="active-navlink"
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    className="navlink"
                    activeClassName="active-navlink"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </>
              )}
              {localStorage.getItem('jwt') && (
                <button className="logout-button" onClick={this.logout}>
                  Logout
                </button>
              )}
            </div>
          </nav>
        </header>
        <main>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <PrivateRoute exact path="/" component={Jokes} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
