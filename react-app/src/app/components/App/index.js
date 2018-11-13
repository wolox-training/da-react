import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Routes from '../../../constants/routes';
import TopBar from '../TopBar';
import Game from '../../screens/Game';
import UserProfile from '../../screens/UserProfile';

function App() {
  return (
    <Fragment>
      <TopBar />
      <Route path={Routes.gameRoute} exact component={Game} />
      <Route path={Routes.profileRoute} exact component={UserProfile} />
    </Fragment>
  );
}

export default App;
