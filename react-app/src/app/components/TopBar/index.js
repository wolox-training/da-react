import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Routes from '../../../constants/routes';

import styles from './styles.scss';

function TopBar({ logUserOut }) {
  const logOut = () => {
    localStorage.removeItem('token');
    logUserOut();
  };

  return (
    <nav className={styles.navbar}>
      <Link className={styles.navLink} to={Routes.gameRoute}>
        Game
      </Link>
      <Link className={styles.navLink} to={Routes.profileRoute}>
        Profile
      </Link>
      <Link className={styles.navLink} to={Routes.loginRoute} onClick={logOut}>
        Logout
      </Link>
    </nav>
  );
}

const mapDispatchToProps = state => ({
  logUserOut: state.session.logUserOut
});

export default connect(mapDispatchToProps)(TopBar);

TopBar.propTypes = {
  logUserOut: PropTypes.func.isRequired
};
