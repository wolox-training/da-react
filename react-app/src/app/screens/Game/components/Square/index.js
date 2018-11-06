import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Square({ value, playTurn }) {
  return (
    <button className={style.square} onClick={playTurn}>
      {value}
    </button>
  );
}

export default Square;

Square.propTypes = {
  value: PropTypes.string,
  playTurn: PropTypes.func.isRequired
};

Square.defaultProps = {
  value: ''
};
