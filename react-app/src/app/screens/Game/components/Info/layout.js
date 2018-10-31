import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { NEXT_PLAYER } from '../../constants';

import styles from './styles.scss';

function Info({ status, movesList }) {
  return (
    <Fragment>
      <div>{status}</div>
      <div className={styles.movesList}>{movesList}</div>
    </Fragment>
  );
}

export default Info;

Info.propTypes = {
  movesList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.func
    })
  ).isRequired,
  status: PropTypes.string
};

Info.defaultProps = {
  status: `${NEXT_PLAYER} X`
};
