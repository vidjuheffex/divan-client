import React from 'react';

import {StyleSheet, css} from 'aphrodite';
import inputs from '../css/inputs.js';

const styles = StyleSheet.create({
  container: {
    padding: '.5rem'
  },
  input: {
    padding: '.5rem',
    marginLeft: '1rem',
    height: '3rem',
    boxSizing: 'border-box'
  },
  button: {
    height: '3rem',
    width: '4rem'
  }
});

let GlobalSettings = (props) =>  (
  <div className={css(styles.container)}>
    <label htmlFor="rootProjectDrive_input">Root Project Drive:</label><input className={css(styles.input)} id="rootProjectDrive_input" type='text' defaultValue={props.globalSettings.rootProjectPath} disabled/><button className={css(inputs.button, styles.button)}>Edit</button><button className={css(inputs.button, inputs.confirmButton, styles.button)}>Set</button><button className={css(inputs.button, inputs.cancelButton, styles.button)}>Cancel</button>
  </div>
);

export default GlobalSettings;
