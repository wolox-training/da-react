const actions = {
  PLAY_TURN: 'PLAY_TURN',
  GO_TO_TURN: 'GO_TO_TURN'
};

const actionCreators = {
  playTurn: squarePosition => ({
    type: actions.PLAY_TURN,
    squarePosition
  }),
  goToTurn: step => ({
    type: actions.GO_TO_TURN,
    step
  })
};

export default actionCreators;
