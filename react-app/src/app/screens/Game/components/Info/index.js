import React from 'react';

import { GO_TO_MOVE, GO_TO_GAME_START } from '../../constants';

import Button from './components/Button';
import Info from './layout';

function InfoContainer({ history, status, onClick }) {
  const movesList = history.map((step, move) => {
    const text = move ? GO_TO_MOVE + move : GO_TO_GAME_START;
    return <Button key={move} onClick={onClick} move={move} text={text} />;
  });
  return <Info status={status} movesList={movesList} />;
}

export default InfoContainer;
