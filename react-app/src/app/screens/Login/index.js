import React from 'react';
import { connect } from 'react-redux';

import actionCreators from '../../../redux/login/actions';

import Form from './components/Form';
import style from './styles.scss';

function Login({ handleSubmit }) {
  return (
    <div className={style.formContainer}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(actionCreators.logInUser(values))
});

export default connect(mapDispatchToProps)(Login);
