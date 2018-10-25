import React from 'react';

import Square from '../Square';

import style from './style.scss';

function Board({ squares, onClick }) {
  const renderSquare = squarePosition => (
    <Square value={squares[squarePosition]} onClick={() => onClick(squarePosition)} />
  );
  const row1 = [0, 1, 2];
  const row2 = [3, 4, 5];
  const row3 = [6, 7, 8];

  return (
    <React.Fragment>
      <div className={style.boardRow}>{row1.map(elem => renderSquare(elem))}</div>
      <div className={style.boardRow}>{row2.map(elem => renderSquare(elem))}</div>
      <div className={style.boardRow}>{row3.map(elem => renderSquare(elem))}</div>
    </React.Fragment>
  );
}

export default Board;
