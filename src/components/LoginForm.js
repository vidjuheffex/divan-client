import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {StyleSheet, css} from 'aphrodite';

import general from '../css/general.js';

const styles = StyleSheet.create({
  input: {
    "-webkit-appearance":"none",
    padding: '.5rem',
    border: 'none'
  }
});

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <div>
          <Field
            className={css(styles.input)}
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            className={css(styles.input)}
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div className={css(general.center)}>
        <button className = {css(general.activeButton)} type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(LoginForm);
