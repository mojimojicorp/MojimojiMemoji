import React from 'react';
import styles from './styles.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.homeBtnDiv}>
        <div className={styles.homeBtn} />
      </div>

      <div className={styles.selectBtn} />
      <div className={styles.selectBtnActive} />
      <div className={styles.logoutBtn} />
      <div className={styles.backBtn} />
    </div>
  );
};

export default Header;
