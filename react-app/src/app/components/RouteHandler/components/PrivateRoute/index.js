import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Routes from '../../../../../constants/routes';

function PrivateRoute({ isLoggedIn, component: Component }) {
  return <Route render={() => (isLoggedIn ? <Component /> : <Redirect to={Routes.loginRoute} />)} />;
}

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.string,
  component: PropTypes.shape({
    type: PropTypes.func
  }).isRequired
};

PrivateRoute.defaultProps = {
  isLoggedIn: null
};
