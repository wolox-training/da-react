import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, checkEmail, passLength } from '../validation';

import { customInput } from './components/Fields';
import style from './styles.scss';

function Form({ handleSubmit }) {
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
      <button type="submit">Submit</button>
    </form>
  );
}

Form = reduxForm({
  form: 'login'
})(Form);

export default Form;
