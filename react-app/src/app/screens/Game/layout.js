import React from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import Info from './components/Info';
import { NEXT_PLAYER } from './constants';
import style from './styles.scss';

function Game({ history, status, squares, playTurn, goToTurn }) {
  return (
    <div className={style.game}>
      <Board squares={squares} playTurn={playTurn} />
      <div className={style.gameInfo}>
        <Info history={history} status={status} goToTurn={goToTurn} />
      </div>
    </div>
  );
}

export default Game;

Game.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  status: PropTypes.string,
  squares: PropTypes.arrayOf(PropTypes.string),
  playTurn: PropTypes.func.isRequired,
  goToTurn: PropTypes.func.isRequired
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
