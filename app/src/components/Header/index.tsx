import React, { useState, useEffect } from 'react';
import styles from './styles.scss';

export interface Props {
  path: string;
}

const Header = ({ path }: Props) => {
  const [select, setSelect] = useState(false);
  const [logout, setLogout] = useState(false);
  const [save, setSave] = useState(false);
  const [back, setBack] = useState(false);

  useEffect(() => {
    if (path == 'folder-list') {
      setSelect(true);
      setLogout(true);
      setSave(false);
      setBack(false);
    } else if (path === 'memo-list') {
      setSelect(true);
      setLogout(false);
      setSave(false);
      setBack(true);
    } else if (path === 'memo-edit') {
      setSelect(false);
      setLogout(false);
      setSave(true);
      setBack(true);
    }
  });

  return (
    <div className={styles.header}>
      <div className={styles.home_btn_div}>
        <div className={styles.home_btn} />
      </div>

      {select ? <div className={styles.select_btn} /> : null}
      {save ? <div className={styles.save_btn} /> : null}
      {logout ? <div className={styles.logout_btn} /> : null}
      {back ? <div className={styles.back_btn} /> : null}
    </div>
  );
};

export default Header;
