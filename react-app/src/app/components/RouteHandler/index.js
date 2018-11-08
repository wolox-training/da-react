import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Routes from '../../../constants/routes';
import AppContainer from '../App';
import Login from '../../screens/Login';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Fragment>
        <Route path={Routes.appRoute} component={AppContainer} />
        <Route path={Routes.loginRoute} component={Login} />
        <PrivateRoute path={Routes.gameRoute} />
      </Fragment>
    </Router>
  );
}

export default App;
