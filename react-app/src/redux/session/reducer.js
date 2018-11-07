const token = localStorage.getItem('token');

const initialState = {
  isLoggedIn: token
};

function session(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLoggedIn: action.token
      };
    default:
      return state;
  }
}

export default session;
