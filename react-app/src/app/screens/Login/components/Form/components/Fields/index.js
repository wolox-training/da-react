import React, { Fragment } from 'react';

export function customInput(props) {
  return (
    <Fragment>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} />
    </Fragment>
  );
}
