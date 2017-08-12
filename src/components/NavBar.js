import React from 'react';
import {Link} from 'react-router-dom';

import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  NavBarOuter: {
    backgroundColor: "white",
    position: 'fixed',
    top: 0,
    height: '2rem',
    display: 'flex',
    width: '100%',
    alignItems: 'center'
  },
  NavBarSpacer: {
    height: '2rem'
  },
  NavLink: {
    color: 'black',
    textDecoration: 'none'
  }
});

const NavBar = (props) => (
  <div>
  <div className={css(styles.NavBarOuter)}>
    <Link className={css(styles.NavLink)} to="/dashboard">Dashboard</Link>
  </div>
  <div className={css(styles.NavBarSpacer)}></div>
  </div>
);

export default NavBar;
