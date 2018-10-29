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

  getConst() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    return { history, current, winner };
  }

  handleClick = squarePosition => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = [...current.squares];
    const winner = calculateWinner(squares);
    const squareIsFilled = squares[squarePosition];
    if (winner || squareIsFilled) return;
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

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  render() {
    const { history, current, winner } = this.getConst();
    let status;
    if (winner) status = `Winner: ${winner}`;
    else status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    return (
      <Game
        history={history}
        status={status}
        squares={current.squares}
        onClick={this.handleClick}
        jumpTo={this.jumpTo}
      />
    );
  }
}

export default GameContainer;
