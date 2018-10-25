import React, { Component } from 'react';

import { calculateWinner } from './utils';
import Game from './layout.js';

class GameContainer extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  };

  handleClick = squarePosition => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    const hasWinner = calculateWinner(squares);
    const squareIsFilled = squares[squarePosition];
    if (hasWinner || squareIsFilled) return;
    squares[squarePosition] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) status = `Winner: ${winner}`;
    else status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    const moves = history.map((step, move) => {
      const text = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{text}</button>
        </li>
      );
    });
    return <Game status={status} moves={moves} squares={current.squares} onClick={this.handleClick} />;
  }
}

export default GameContainer;
