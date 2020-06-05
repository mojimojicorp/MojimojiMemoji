import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

import FolderSetting from '../FolderSetting';
import MemoSetting from '../MemoSetting';

type HeaderProps = {
  hasSelectBtn?: boolean;
  hasLogoutBtn?: boolean;
  hasSaveBtn?: boolean;
  hasBackBtn?: boolean;
  isSelecting: boolean;
  setIsSelecting: Function;
};

const Header = ({
  hasSelectBtn,
  hasLogoutBtn,
  hasSaveBtn,
  hasBackBtn,
  isSelecting,
  setIsSelecting,
}: HeaderProps) => {
  const handleSelectBtnClick = () => {
    setIsSelecting(!isSelecting);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.home_btn_div}>
          <button className={styles.home_btn} type="button">
            ''
          </button>
        </div>

        {hasSelectBtn && (
          <button
            type="button"
            className={classNames(styles.select_btn, isSelecting ? styles.active : '')}
            onClick={handleSelectBtnClick}
          >
            ''
          </button>
        )}
        {hasSaveBtn && <input type="button" className={styles.save_btn} />}
        {hasLogoutBtn && <input type="button" className={styles.logout_btn} />}
        {hasBackBtn && <input type="button" className={styles.back_btn} />}
      </header>

      {isSelecting && hasLogoutBtn && <FolderSetting />}
      {isSelecting && hasBackBtn && <MemoSetting />}
    </>
  );
};

export default Header;
