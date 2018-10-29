import React from 'react';

import style from './styles.scss';

function Square({ value, onClick }) {
  return (
    <button className={style.square} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
