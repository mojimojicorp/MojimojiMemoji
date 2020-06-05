import React from 'react';

import styles from './styles.scss';
import Header from '../../components/Header';
import Folder from '../../components/Folder';
import folders from '../../mock/folders';

const FolderListPage = () => {
  return (
    <>
      <Header hasSelectBtn={true} hasLogoutBtn={true} />

      <div className={styles.folder_container}>
        <div className={styles.folder_list}>
          {folders.map((folder) => {
            return (
              <div className={styles.folder} key={folder.id}>
                <Folder color={folder.color} />
                <div className={styles.title}>{folder.name}</div>
              </div>
            );
          })}
          <div className={styles.add} />
        </div>
      </div>
    </>
  );
};

export default FolderListPage;
