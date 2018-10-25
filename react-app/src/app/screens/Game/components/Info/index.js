import React from 'react';

import Button from './components/Button';
import Info from './layout';

function InfoContainer({ history, status, onClick }) {
  const movesList = history.map((step, move) => {
    const text = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <Button onClick={onClick} move={move} text={text} />
      </li>
    );
  });
  return <Info status={status} movesList={movesList} />;
}

export default InfoContainer;
