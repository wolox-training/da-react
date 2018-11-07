const token = localStorage.getItem('token');

const initialState = {
  isLoggedIn: token,
  requestFailure: ''
};

function session(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLoggedIn: action.token
      };
    case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        requestFailure: action.requestFailure
      };
    default:
      return state;
  }
}

export default session;
