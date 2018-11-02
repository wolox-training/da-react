import React from 'react';
import { connect } from 'react-redux';

import actionCreators from '../../../redux/game/actions';

import Game from './layout.js';

function GameContainer({ history, stepNumber, xIsNext, winner, handleClick, jumpTo }) {
  const current = history[stepNumber];
  const squares = current.squares;
  let status;
  if (winner) status = `Winner: ${winner}`;
  else status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return <Game history={history} status={status} squares={squares} onClick={handleClick} jumpTo={jumpTo} />;
}

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext,
  winner: state.game.winner
});

const mapDispatchToProps = dispatch => ({
  handleClick: squarePosition => dispatch(actionCreators.handleClick(squarePosition)),
  jumpTo: move => dispatch(actionCreators.jumpTo(move))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
