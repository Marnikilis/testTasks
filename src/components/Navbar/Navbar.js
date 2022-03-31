import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.scss';


const Navbar = () => {

  return (
    <div className={styles.nav}>
      <NavLink to='/fromUAHtoUSD' className={styles.link}>UAH-USD</NavLink>
      <NavLink to='/fromUAHtoEUR' className={styles.link}>UAH-EUR</NavLink>
      <NavLink to='/fromUAHtoPLN' className={styles.link}>UAH-PLN</NavLink>
    </div>
  );
};

export default Navbar;