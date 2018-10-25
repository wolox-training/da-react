import React from 'react';

import Board from './components/Board';
import Info from './components/Info';
import style from './styles.scss';

function Game({ history, status, squares, onClick, jumpTo }) {
  return (
    <div className={style.game}>
      <div>
        <Board squares={squares} onClick={onClick} />
      </div>
      <div className={style.gameInfo}>
        <Info history={history} status={status} onClick={jumpTo} />
      </div>
    </div>
  );
}

export default Game;
