import React from 'react';
import PropTypes from 'prop-types';

import { GO_TO_GAME_START } from '../../../../constants';

function Button({ onClick, move, text }) {
  return <button onClick={() => onClick(move)}>{text}</button>;
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  move: PropTypes.number.isRequired,
  text: PropTypes.string
};

Button.defaultProps = {
  text: GO_TO_GAME_START
};
