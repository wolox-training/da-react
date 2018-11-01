const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

function game(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_CLICK':
      return state; // Pending
    case 'JUMP_TO':
      return state; // Pending
    default:
      return state;
  }
}

export default game;
