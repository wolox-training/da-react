import React, { Component } from 'react';

import Square from '../Square';

import { calculateWinner } from './utils';
import style from './style.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: false
  };

  handleClick = i => {
    const squares = [...this.state.squares];
    const hasWinner = calculateWinner(squares);
    const squareIsFilled = squares[i];
    if (hasWinner || squareIsFilled) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    });
  };

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) status = `Player ${winner} won`;
    else status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <React.Fragment>
        <div className={style.status}>{status}</div>
        <div className={style.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={style.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={style.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
