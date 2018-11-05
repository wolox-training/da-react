import React from 'react';

import Form from './components/Form';
import style from './styles.scss';

function Login() {
  const submitForm = values => {
    window.alert(JSON.stringify(values, null, 4));
  };

  return (
    <div className={style.formContainer}>
      <Form onSubmit={submitForm} />
    </div>
  );
}

export default Login;
