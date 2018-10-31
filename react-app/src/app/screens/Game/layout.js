import React from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import Info from './components/Info';
import { NEXT_PLAYER } from './constants';
import style from './styles.scss';

function Game({ history, status, squares, onClick, jumpTo }) {
  return (
    <div className={style.game}>
      <Board squares={squares} onClick={onClick} />
      <div className={style.gameInfo}>
        <Info history={history} status={status} onClick={jumpTo} />
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
  onClick: PropTypes.func.isRequired,
  jumpTo: PropTypes.func.isRequired
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
