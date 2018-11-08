import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Game from '../../screens/Game';
import Login from '../../screens/Login';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Fragment>
        <Route path="/login" component={Login} />
        <Route path="/game" component={Game} />
        <PrivateRoute path="/game" />
      </Fragment>
    </Router>
  );
}

export default App;
