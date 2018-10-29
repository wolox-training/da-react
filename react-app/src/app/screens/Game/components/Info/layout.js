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
  status: PropTypes.string,
  movesList: PropTypes.element.isRequired
};

Info.defaultProps = {
  status: `${NEXT_PLAYER} X`
};
