import React, { Component } from 'react';

import style from './styles.scss';

function Square(props) {
  return (
    <button className={style.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
