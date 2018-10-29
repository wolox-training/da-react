import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Square({ value, onClick }) {
  return (
    <button className={style.square} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Square.propTypes = {
  value: ''
};
