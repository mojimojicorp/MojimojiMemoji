import React from 'react';
import styles from './styles.scss';
import homeBtn from '../../images/icon_64x64.png';
import backBtn from '../../images/header/back_btn.png';
import logoutBtn from '../../images/header/logout_btn.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={homeBtn} alt="" className={styles.homeBtn} />
      <img src={logoutBtn} alt="" />
      <img src={backBtn} alt="" className={styles.backBtn} />
    </div>
  );
};

export default Header;
