import React from 'react';
import {Link} from 'react-router-dom';

import {StyleSheet, css} from 'aphrodite';

export const navBarHeight = '2rem';

const styles = StyleSheet.create({
  NavBarOuter: {
    backgroundColor: "white",
    position: 'fixed',
    top: 0,
    height: navBarHeight,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    boxShadow: '0rem 0rem .4rem 0rem rgba(0,0,0,.25)'
  },
  NavBarSpacer: {
    height: navBarHeight
  },
  NavLink: {
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    color: 'black',
    textDecoration: 'none'
  }
});

const NavBar = (props) => (
  <div>
    <div className={css(styles.NavBarOuter)}>
      <Link className={css(styles.NavLink)}
            to="/dashboard">
        Dashboard
      </Link>
      <Link className={css(styles.NavLink)}
            to="/dashboard/admin">
        Admin Area
      </Link>
    </div>
    <div className={css(styles.NavBarSpacer)}></div>
  </div>
);

export default NavBar;
