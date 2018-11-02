import React from 'react';
import PropTypes from 'prop-types';

import { GO_TO_MOVE, GO_TO_GAME_START, NEXT_PLAYER } from '../../constants';

import Button from './components/Button';
import Info from './layout';

function InfoContainer({ history, status, goToTurn }) {
  const movesList = history.map((step, move) => {
    const text = move ? GO_TO_MOVE + move : GO_TO_GAME_START;
    return <Button key={move} goToTurn={goToTurn} move={move} text={text} />;
  });
  return <Info status={status} movesList={movesList} />;
}

export default InfoContainer;

InfoContainer.propTypes = {
  goToTurn: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      move: PropTypes.number
    })
  ),
  status: PropTypes.string
};

InfoContainer.defaultProps = {
  history: {
    squares: []
  },
  status: `${NEXT_PLAYER} X`
};
