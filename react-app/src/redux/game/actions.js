const actions = {
  HANDLE_CLICK: 'HANDLE_CLICK',
  JUMP_TO: 'JUMP_TO'
};

const actionCreators = {
  handleClick: squarePosition => ({
    type: actions.HANDLE_CLICK,
    squarePosition
  }),
  jumpTo: move => ({
    type: actions.JUMP_TO,
    move
  })
};

export default actionCreators;
