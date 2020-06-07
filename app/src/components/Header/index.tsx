import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

import MemoSetting from '../MemoSetting';

type HeaderProps = {
  hasSelectBtn?: boolean;
  hasLogoutBtn?: boolean;
  hasSaveBtn?: boolean;
  hasBackBtn?: boolean;
  isSelecting: boolean;
  setIsSelecting: Function;
  setSelectedFolders?: Function;
};

const Header = ({
  hasSelectBtn,
  hasLogoutBtn,
  hasSaveBtn,
  hasBackBtn,
  isSelecting,
  setIsSelecting,
  setSelectedFolders,
}: HeaderProps) => {
  const handleSelectBtnClick = () => {
    setIsSelecting(!isSelecting);
    setSelectedFolders([]);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.home_btn_div}>
          <input className={styles.home_btn} type="button" />
        </div>

        {hasSelectBtn && (
          <input
            type="button"
            className={classNames(
              styles.select_btn,
              isSelecting ? styles.active : ''
            )}
            onClick={handleSelectBtnClick}
          />
        )}
        {hasSaveBtn && <input type="button" className={styles.save_btn} />}
        {hasLogoutBtn && <input type="button" className={styles.logout_btn} />}
        {hasBackBtn && <input type="button" className={styles.back_btn} />}
      </header>

      {isSelecting && hasBackBtn && <MemoSetting />}
    </>
  );
};

export default Header;
