import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TopBar from '../../components/TopBar';

import Board from './components/Board';
import Info from './components/Info';
import { NEXT_PLAYER } from './constants';
import style from './styles.scss';

function Game({ history, status, squares, playTurn, goToTurn }) {
  return (
    <Fragment>
      <div className={style.game}>
        <Board squares={squares} playTurn={playTurn} />
        <div className={style.gameInfo}>
          <Info history={history} status={status} goToTurn={goToTurn} />
        </div>
      </div>
    </Fragment>
  );
}

export default Game;

Game.propTypes = {
  playTurn: PropTypes.func.isRequired,
  goToTurn: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  status: PropTypes.string,
  squares: PropTypes.arrayOf(PropTypes.string)
};

Game.defaultProps = {
  history: [
    {
      squares: []
    }
  ],
  status: `${NEXT_PLAYER} X`,
  squares: []
};
