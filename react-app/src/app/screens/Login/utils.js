import React from 'react';

import styles from './styles.scss';

export const withLoading = Component => props =>
  !props.isLoading ? <Component /> :  <div className={styles.loading} />;
