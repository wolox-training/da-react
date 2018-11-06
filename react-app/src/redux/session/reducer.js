const initialState = JSON.parse(localStorage.getItem('token'));

function session(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
}

export default session;
