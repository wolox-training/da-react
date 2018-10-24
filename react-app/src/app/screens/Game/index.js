import React, { Component } from 'react';

import Board from './components/Board';
import { calculateWinner } from './utils';
import style from './styles.scss';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    xIsNext: false
  };

  handleClick = i => {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = [...current.squares];
    const hasWinner = calculateWinner(squares);
    const squareIsFilled = squares[i];
    if (hasWinner || squareIsFilled) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      xIsNext: !this.state.xIsNext
    });
  };

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) status = `Winner: ${winner}`;
    else status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    return (
      <div className={style.game}>
        <div>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={style.gameInfo}>
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
