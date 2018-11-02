import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/game/actions';

import Game from './layout.js';

function GameContainer({ history, stepNumber, xIsNext, winner, playTurn, goToTurn }) {
  const current = history[stepNumber];
  const squares = current.squares;
  let status;
  if (winner) status = `Winner: ${winner}`;
  else status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return <Game history={history} status={status} squares={squares} playTurn={playTurn} goToTurn={goToTurn} />;
}

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext,
  winner: state.game.winner
});

const mapDispatchToProps = dispatch => ({
  playTurn: squarePosition => dispatch(actionCreators.playTurn(squarePosition)),
  goToTurn: move => dispatch(actionCreators.goToTurn(move))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);

GameContainer.propTypes = {
  playTurn: PropTypes.func.isRequired,
  goToTurn: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
  winner: PropTypes.string
};

GameContainer.defaultProps = {
  history: {
    squares: []
  },
  stepNumber: 0,
  xIsNext: true,
  winner: null
};
