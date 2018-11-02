import { calculateWinner } from '../../utils';

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

const handleClick = (state, squarePosition) => {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[state.stepNumber];
  const squares = [...current.squares];
  const squareIsFilled = squares[squarePosition];
  if (state.winner || squareIsFilled) return state;
  squares[squarePosition] = state.xIsNext ? 'X' : 'O';
  const winner = calculateWinner(squares);
  return {
    ...state,
    history: history.concat([
      {
        squares
      }
    ]),
    xIsNext: !state.xIsNext,
    stepNumber: history.length,
    winner
  };
};

const jumpTo = (state, step) => {
  const prevHistory = state.history[step];
  const winner = calculateWinner(prevHistory.squares);
  return {
    ...state,
    stepNumber: step,
    xIsNext: step % 2 === 0,
    winner
  };
};

function game(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_CLICK':
      return handleClick(state, action.squarePosition);
    case 'JUMP_TO':
      return jumpTo(state, action.step);
    default:
      return state;
  }
}

export default game;
