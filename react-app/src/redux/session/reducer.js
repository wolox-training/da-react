import setInitialState from './utils';

let initialState;
const user = JSON.parse(localStorage.getItem('user'));

if (user) {
  initialState = setInitialState(user);
} else {
  initialState = {
    isLoggedIn: '',
    requestFailure: ''
  };
}

function session(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLoggedIn: action.user.token,
        name: action.user.name,
        xWins: action.user.xWins,
        oWins: action.user.oWins
      };
    case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        requestFailure: action.requestFailure
      };
    case 'LOG_USER_OUT':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    case 'UPDATE_SESSION':
      return {
        ...state,
        xWins: action.user.xWins,
        oWins: action.user.oWins
      };
    default:
      return state;
  }
}

export default session;
