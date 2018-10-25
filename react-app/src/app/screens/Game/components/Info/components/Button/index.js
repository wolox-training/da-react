import React from 'react';

function Button({ onClick, move, text }) {
  const jumpTo = () => onClick(move);
  return <button onClick={jumpTo}>{text}</button>;
}

export default Button;
