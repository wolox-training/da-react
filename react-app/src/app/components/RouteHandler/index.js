import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Game from '../../screens/Game';
import Login from '../../screens/Login';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/game" component={Game} />
        <Route path="/login" component={Login} />
      </Fragment>
    </Router>
  );
}

export default App;
