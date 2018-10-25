import React from 'react';

import Board from './components/Board';
import style from './styles.scss';

function Game({ status, moves, squares, onClick }) {
  return (
    <div className={style.game}>
      <div>
        <Board squares={squares} onClick={onClick} />
      </div>
      <div className={style.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
