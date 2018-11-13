function setInitialState({ token, name, xWins, oWins }) {
  return {
    isLoggedIn: token,
    requestFailure: '',
    isLoading: false,
    name,
    xWins,
    oWins
  };
}

export default setInitialState;
