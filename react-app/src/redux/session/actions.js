import UserService from '../../services/UserService';
import api from '../../config/api';

import { NETWORK_PROBLEM, WRONG_INPUT } from './contants';

const actions = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',
  LOG_USER_OUT: 'LOG_USER_OUT',
  UPDATE_SESSION: 'UPDATE_SESSION'
};

const actionCreators = {
  logInUser: values => async dispatch => {
    const response = await UserService.getUser(values);
    if (response.ok) {
      const retrievedUsers = response.data.length;
      if (retrievedUsers) {
        const user = response.data[0];
        localStorage.setItem('user', JSON.stringify(user));
        api.setHeader('access-token', user.token);
        dispatch({
          type: actions.LOGIN_USER,
          user
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
  },
  logUserOut: () => ({
    type: actions.LOG_USER_OUT,
    isLoggedIn: null
  }),
  updateSession: () => async dispatch => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    const response = await UserService.getUser(token);
    const user = response.data[0];
    dispatch({
      type: actions.UPDATE_SESSION,
      user
    });
  }
};

export default actionCreators;
