import React from 'react';

import Form from './components/Form';
import style from './styles.scss';

function Login() {
  const handleSubmit = values => {
    console.log('test');
    window.alert(JSON.stringify(values, null, 4));
  };

  return (
    <div className={style.formContainer}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
