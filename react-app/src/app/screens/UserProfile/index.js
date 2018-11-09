import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles.scss';

function UserProfile({ Name, xWins, oWins }) {
  return (
    <div className={styles.profileContainer}>
      <h2>{`Bienvenido ${Name}`}</h2>
      <div>
        <h3>Historial de Juegos:</h3>
        <p>{`- X ha ganado ${xWins} partidas`}</p>
        <p>{`- O ha ganado ${oWins} partidas`}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  Name: state.session.name,
  xWins: state.session.xWins,
  oWins: state.session.oWins
});

export default connect(mapStateToProps)(UserProfile);

UserProfile.propTypes = {
  Name: PropTypes.string,
  xWins: PropTypes.number,
  oWins: PropTypes.number
};

UserProfile.defaultProps = {
  Name: '',
  xWins: 0,
  oWins: 0
};
