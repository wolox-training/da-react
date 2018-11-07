import UserService from '../../services/UserService';

const actions = {
  LOGIN_USER: 'LOGIN_USER'
};

const actionCreators = {
  logInUser: values => async dispatch => {
    const response = await UserService.getUsers(values.email, values.password);
    const user = response.data[0];
    if (response.ok && user) {
      const token = user.token;
      localStorage.setItem('token', token);
      dispatch({
        type: actions.LOGIN_USER,
        token
      });
    } else {
      alert('TEST');
    }
  }
};

export default actionCreators;
