import React from 'react';
import styles from './styles.scss';

type HeaderProps = {
  hasSelectBtn?: boolean;
  hasLogoutBtn?: boolean;
  hasSaveBtn?: boolean;
  hasBackBtn?: boolean;
};

const Header = ({
  hasSelectBtn,
  hasLogoutBtn,
  hasSaveBtn,
  hasBackBtn,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.home_btn_div}>
        <button className={styles.home_btn} type="button" />
      </div>

      {hasSelectBtn && <button className={styles.select_btn} />}
      {hasSaveBtn && <button className={styles.save_btn} />}
      {hasLogoutBtn && <button className={styles.logout_btn} />}
      {hasBackBtn && <button className={styles.back_btn} />}
    </header>
  );
};

export default Header;
