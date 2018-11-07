import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Game from '../../screens/Game';
import Login from '../../screens/Login';

function App({ isLoggedIn }) {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/game" render={() => (isLoggedIn ? <Game /> : <Redirect to="/login" />)} />
        <Route path="/login" render={() => (isLoggedIn ? <Redirect to="/game" /> : <Login />)} />
      </Fragment>
    </Router>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn
});

export default connect(mapStateToProps)(App);
