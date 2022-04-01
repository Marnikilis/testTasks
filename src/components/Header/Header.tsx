import React from 'react';
//@ts-ignore
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Converter</h1>
    </div>
  );
};

export default Header;