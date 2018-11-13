import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, checkEmail, passLength } from '../validation';

import Button from './components/Button';
import { customInput } from './components/Fields';
import style from './styles.scss';

function Form({ handleSubmit, isLoading }) {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2 className={style.formTitle}>Tic Tac Toe</h2>
      <div className={style.formField}>
        <Field
          name="email"
          component={customInput}
          type="text"
          label="Name"
          validate={[required, checkEmail]}
        />
      </div>
      <div className={style.formField}>
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, passLength]}
        />
      </div>
      <Button isLoading={isLoading} />
    </form>
  );
}
// eslint-disable-next-line no-func-assign
export default reduxForm({
  form: 'login'
})(Form);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
