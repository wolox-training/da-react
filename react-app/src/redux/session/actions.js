import UserService from '../../services/UserService';

import { NETWORK_PROBLEM, WRONG_INPUT } from './contants';

const actions = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE'
};

const actionCreators = {
  logInUser: values => async dispatch => {
    const response = await UserService.getUsers(values.email, values.password);
    if (response.ok) {
      const retrievedUsers = response.data.length;
      if (retrievedUsers) {
        const user = response.data[0];
        const token = user.token;
        localStorage.setItem('token', token);
        dispatch({
          type: actions.LOGIN_USER,
          token
        });
      } else {
        dispatch({
          type: actions.LOGIN_USER_FAILURE,
          requestFailure: WRONG_INPUT
        });
      }
    } else {
      dispatch({
        type: actions.LOGIN_USER_FAILURE,
        requestFailure: NETWORK_PROBLEM
      });
    }
  }
};

export default actionCreators;
