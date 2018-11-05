import React, { Fragment } from 'react';

import style from './styles.scss';

export function customInput({ label, input, type, meta }) {
  return (
    <Fragment>
      <label>{label}</label>
      <input {...input} type={type} />
      {meta.error && meta.touched && <div className={style.fieldError}>{meta.error}</div>}
    </Fragment>
  );
}
