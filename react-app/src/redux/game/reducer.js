import { playTurn, goToTurn } from './utils';

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true,
  winner: null
};

function game(state = initialState, action) {
  switch (action.type) {
    case 'PLAY_TURN':
      return playTurn(state, action.squarePosition);
    case 'GO_TO_TURN':
      return goToTurn(state, action.step);
    default:
      return state;
  }
}

export default game;
