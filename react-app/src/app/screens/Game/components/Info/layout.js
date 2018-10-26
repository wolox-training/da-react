import React, { Fragment } from 'react';

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
