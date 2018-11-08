import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ path, isLoggedIn }) {
  return isLoggedIn ? <Redirect to={path} /> : <Redirect to="/login" />;
}

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  path: PropTypes.string,
  isLoggedIn: PropTypes.bool
};

PrivateRoute.defaultProps = {
  path: '/',
  isLoggedIn: false
};
