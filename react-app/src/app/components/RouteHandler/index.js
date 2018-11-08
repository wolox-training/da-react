import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Routes from '../../../constants/routes';
import Game from '../../screens/Game';
import Login from '../../screens/Login';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Fragment>
        <Route path={Routes.loginRoute} component={Login} />
        <Route path={Routes.gameRoute} component={Game} />
        <PrivateRoute path={Routes.gameRoute} />
      </Fragment>
    </Router>
  );
}

export default App;
