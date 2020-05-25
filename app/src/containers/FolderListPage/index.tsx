import React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import Folder from '../../components/Folder';
import FolderSetting from '../../components/FolderSetting';

const FolderListPage = () => {
  return (
    <>
      <Header hasSelectBtn={true} hasLogoutBtn={true} />
      <FolderSetting />
      <div className={styles.folder_container}>
        <div className={styles.folder_list}>
          <div className={styles.folder}>
            <Folder />
            <div className={styles.title}>새 폴더</div>
          </div>
          <div className={styles.folder}>
            <Folder />
            <div className={styles.title}>새 폴더</div>
          </div>
          <div className={styles.folder}>
            <Folder />
            <div className={styles.title}>새 폴더</div>
          </div>
          <div className={styles.folder}>
            <Folder />
            <div className={styles.title}>새 폴더</div>
          </div>
          <div className={styles.add} />
        </div>
      </div>
    </>
  );
};

export default FolderListPage;
