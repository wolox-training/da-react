import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Routes from '../../../constants/routes';
import actionCreators from '../../../redux/session/actions';

import Form from './components/Form';
import style from './styles.scss';

function Login({ isLoggedIn, isLoading, requestFailure, handleSubmit }) {
  if (isLoggedIn) return <Redirect to={Routes.gameRoute} />;

  return (
    <div className={style.formContainer}>
      <Form onSubmit={handleSubmit} isLoading={isLoading} />
      {requestFailure && <div className={style.formError}>{requestFailure}</div>}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.session.isLoading,
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
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.string,
  requestFailure: PropTypes.string
};

Login.defaultProps = {
  requestFailure: '',
  isLoading: false,
  isLoggedIn: ''
};
