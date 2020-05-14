import React from 'react';

import styles from './styles.scss';
import logo from '../../images/body/logo_618x618.png';
import naverLoginBtn from '../../images/body/naverLogin_btn.png';

const LoginPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.title}>
          <span>모지모지 메모지</span>
        </div>
        <div className={styles.login_btn}>
          <img src={naverLoginBtn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
