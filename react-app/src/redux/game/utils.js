function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let winner = null;
  lines.forEach(line => {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
    }
  });
  return winner;
}

export function goToTurn(state, step) {
  const prevHistory = state.history[step];
  const winner = calculateWinner(prevHistory.squares);
  return {
    ...state,
    stepNumber: step,
    xIsNext: step % 2 === 0,
    winner
  };
}

export function playTurn(state, squarePosition) {
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
}
