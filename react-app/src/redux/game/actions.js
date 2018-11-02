const actions = {
  HANDLE_CLICK: 'HANDLE_CLICK',
  JUMP_TO: 'JUMP_TO'
};

const actionCreators = {
  handleClick: squarePosition => ({
    type: actions.HANDLE_CLICK,
    squarePosition
  }),
  jumpTo: step => ({
    type: actions.JUMP_TO,
    step
  })
};

export default actionCreators;
