function setInitialState({ token, name, xWins, oWins }) {
  return {
    isLoggedIn: token,
    requestFailure: '',
    name,
    xWins,
    oWins
  };
}

export default setInitialState;
