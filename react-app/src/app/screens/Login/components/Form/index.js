import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { customInput } from './components/Fields';
import style from './styles.scss';

function Form({ submitForm }) {
  return (
    <form className={style.form} onSubmit={submitForm}>
      <h2 className={style.formTitle}>Tic Tac Toe</h2>
      <div className={style.formField}>
        <Field name="email" component={customInput} type="email" label="Name" />
      </div>
      <div className={style.formField}>
        <Field name="password" component={customInput} type="password" label="Password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

Form = reduxForm({
  form: 'login'
})(Form);

export default Form;
