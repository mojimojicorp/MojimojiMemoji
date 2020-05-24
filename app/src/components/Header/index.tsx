import React from 'react';
import styles from './styles.scss';

type HeaderProps = {
  hasSelectBtn?: boolean,
  hasLogoutBtn?: boolean,
  hasSaveBtn?: boolean,
  hasBackBtn?: boolean,
};

const Header = ({ hasSelectBtn, hasLogoutBtn, hasSaveBtn, hasBackBtn  }: HeaderProps) => {

  return (
    <div className={styles.header}>
      <div className={styles.home_btn_div}>
        <div className={styles.home_btn} />
      </div>

      { hasSelectBtn && <div className={styles.select_btn} /> }
      { hasSaveBtn && <div className={styles.save_btn} /> }
      { hasLogoutBtn && <div className={styles.logout_btn} /> }
      { hasBackBtn && <div className={styles.back_btn} /> }
    </div>
  );
};

export default Header;
