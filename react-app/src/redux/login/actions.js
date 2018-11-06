import UserService from '../../services/UserService';

const actions = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE'
};

const actionCreators = {
  logInUser: values => async dispatch => {
    dispatch(actions.LOGIN_USER);
    const response = await UserService.getUsers(values.email, values.password);
    const user = response.data[0];
    if (response.ok && user) {
      dispatch({
        type: actions.LOGIN_USER_SUCCESS,
        user
      });
    } else {
      dispatch({
        type: actions.LOGIN_USER_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
