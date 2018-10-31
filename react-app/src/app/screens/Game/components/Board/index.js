import React from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import style from './style.scss';

const row1 = [0, 1, 2];
const row2 = [3, 4, 5];
const row3 = [6, 7, 8];

function Board({ squares, onClick }) {
  const renderSquare = squarePosition => (
    <Square value={squares[squarePosition]} onClick={() => onClick(squarePosition)} />
  );

  return (
    <div className={style.boardContainer}>
      <div className={style.boardRow}>{row1.map(elem => renderSquare(elem))}</div>
      <div className={style.boardRow}>{row2.map(elem => renderSquare(elem))}</div>
      <div className={style.boardRow}>{row3.map(elem => renderSquare(elem))}</div>
    </div>
  );
}

export default Board;

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired
};

Board.defaultProps = {
  squares: []
};
