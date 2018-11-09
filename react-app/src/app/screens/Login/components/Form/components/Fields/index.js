import React, { Fragment } from 'react';

import style from './styles.scss';

export function customInput({ label, input, type, meta }) {
  return (
    <Fragment>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label>{label}</label>
      <input {...input} type={type} />
      {meta.error && meta.touched && <div className={style.fieldError}>{meta.error}</div>}
    </Fragment>
  );
}
