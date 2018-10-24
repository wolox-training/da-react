import React, { Component } from 'react';

import Square from '../Square';

import style from './style.scss';

class Board extends Component {
  state = { squares: Array(9).fill(null) };

  handleClick = i => {
    const squares = [...this.state.squares];
    squares[i] = 'X';
    this.setState({ squares });
  };

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const status = 'Next player: X';

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
