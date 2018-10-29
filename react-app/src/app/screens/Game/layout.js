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
  history: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string,
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.instanceOf(Function).isRequired,
  jumpTo: PropTypes.instanceOf(Function).isRequired
};

Game.defaultProps = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  status: `${NEXT_PLAYER} X`,
  squares: history[0].squares
};
