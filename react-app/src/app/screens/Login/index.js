import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/session/actions';

import Form from './components/Form';
import style from './styles.scss';

function Login({ isLoggedIn, requestFailure, handleSubmit }) {
  if (isLoggedIn) return <Redirect to="/game" />;
  return (
    <div className={style.formContainer}>
      <Form onSubmit={handleSubmit} />
      {requestFailure && <div className={style.formError}>{requestFailure}</div>}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  requestFailure: state.session.requestFailure
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(actionCreators.logInUser(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  requestFailure: PropTypes.string
};

Login.defaultProps = {
  isLoggedIn: false,
  requestFailure: ''
};
