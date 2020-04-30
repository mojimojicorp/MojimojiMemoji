import React from 'react';
import styles from './styles.scss';
import homeBtn from '../../images/icon_64x64.png';
import backBtn from '../../images/header/back_btn.png';
import logoutBtn from '../../images/header/logout_btn.png';



const Header = () => {
  return (
    <div className={styles.header}>
      <img src={homeBtn} alt="" />
      <img src={logoutBtn} alt="" />
    </div>
  );
};

export default Header;
