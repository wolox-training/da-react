import React from 'react';

function Button({ onClick, move, text }) {
  return <button onClick={() => onClick(move)}>{text}</button>;
}

export default Button;
