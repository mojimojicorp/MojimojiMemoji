import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

import FolderSetting from '../../components/FolderSetting';
import MemoSetting from '../../components/MemoSetting';

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
  const toggleSelect = () => {
    setIsSelecting(!isSelecting);
  };

  const [isSelecting, setIsSelecting] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.home_btn_div}>
          <button className={styles.home_btn} type="button" />
        </div>

        {hasSelectBtn && (
          <button
            className={classNames(
              styles.select_btn,
              isSelecting ? styles.active : ''
            )}
            onClick={toggleSelect}
          />
        )}
        {hasSaveBtn && <button className={styles.save_btn} />}
        {hasLogoutBtn && <button className={styles.logout_btn} />}
        {hasBackBtn && <button className={styles.back_btn} />}
      </header>

      {isSelecting && hasLogoutBtn && <FolderSetting />}
      {isSelecting && hasBackBtn && <MemoSetting />}
    </>
  );
};

export default Header;
