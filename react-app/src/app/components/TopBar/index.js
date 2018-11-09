import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/session/actions';
import Routes from '../../../constants/routes';

import styles from './styles.scss';

function TopBar({ logUserOut, updateSession }) {
  const logOut = () => {
    localStorage.removeItem('user');
    logUserOut();
  };

  return (
    <nav className={styles.navbar}>
      <Link className={styles.navLink} to={Routes.gameRoute}>
        Game
      </Link>
      <Link className={styles.navLink} to={Routes.profileRoute} onClick={updateSession}>
        Profile
      </Link>
      <Link className={styles.navLink} to={Routes.loginRoute} onClick={logOut}>
        Logout
      </Link>
    </nav>
  );
}

const mapDispatchToProps = dispatch => ({
  logUserOut: () => dispatch(actionCreators.logUserOut()),
  updateSession: () => dispatch(actionCreators.updateSession())
});

export default connect(
  null,
  mapDispatchToProps
)(TopBar);

TopBar.propTypes = {
  logUserOut: PropTypes.func.isRequired,
  updateSession: PropTypes.func.isRequired
};
