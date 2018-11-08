import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Routes from '../../../constants/routes';
import TopBar from '../TopBar';
import Game from '../../screens/Game';

function App() {
  return (
    <Fragment>
      <TopBar />
      <Route path={Routes.gameRoute} component={Game} />
    </Fragment>
  );
}

export default App;
