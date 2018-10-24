import React, { Component } from 'react';

import style from './styles.scss';

class Square extends Component {
  state = { value: null };

  render() {
    return (
      <button className={style.square} onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
