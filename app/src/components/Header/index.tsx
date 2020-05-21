import React from 'react';
import styles from './styles.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.home_btn_div}>
        <div className={styles.home_btn} />
      </div>

      <div className={styles.select_btn} />
      <div className={styles.select_btn_active} />
      <div className={styles.logout_btn} />
      <div className={styles.back_btn} />
    </div>
  );
};

export default Header;
