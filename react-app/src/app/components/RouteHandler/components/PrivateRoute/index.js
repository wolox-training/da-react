import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Routes from '../../../../../constants/routes';

function PrivateRoute({ path, isLoggedIn }) {
  return isLoggedIn ? <Redirect to={path} /> : <Redirect to={Routes.loginRoute} />;
}

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  path: PropTypes.string,
  isLoggedIn: PropTypes.string
};

PrivateRoute.defaultProps = {
  path: '/',
  isLoggedIn: ''
};
