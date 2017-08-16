import React from 'react';

import {StyleSheet, css} from 'aphrodite';

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
    width: '4rem',
    height: '3rem',
    padding: '.5rem',
    borderStyle: 'none',
    borderRadius: '.25rem',
    marginLeft: '.5rem'
  },
  green: {
    backgroundColor: 'green',
    color: 'white'
  },
  red: {
    backgroundColor: 'red',
    color: 'white'
  }
});

let GlobalSettings = (props) =>  (
  <div className={css(styles.container)}>
    <label htmlFor="rootProjectDrive_input">Root Project Drive:</label><input className={css(styles.input)} id="rootProjectDrive_input" type='text' defaultValue={props.globalSettings.rootProjectPath} disabled/><button className={css(styles.button)}>Edit</button><button className={css(styles.button, styles.green)}>Set</button><button className={css(styles.button, styles.red)}>Cancel</button>
  </div>
);

export default GlobalSettings;
