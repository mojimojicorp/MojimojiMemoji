import React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import Folder from '../../components/Folder';

const FolderListPage = () => {
  return (
    <>
      <Header />
      <div className={styles.folderContainer}>
        <div className={styles.folderList}>
          <div className={styles.folder}>
            <Folder />
            <div className={styles.title}>새 폴더</div>
          </div>
          <div className={styles.folder}>
            <Folder/>
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
          <div className={styles.add}>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderListPage;
