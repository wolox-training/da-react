import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from '../../../constants/routes';
import AppContainer from '../App';
import Login from '../../screens/Login';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path={Routes.loginRoute} component={Login} />
          <PrivateRoute component={AppContainer} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
