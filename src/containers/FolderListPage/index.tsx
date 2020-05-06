import React from 'react';
import styles from './styles.scss';
import folder from '../../images/body/folder_btn.png';
import addBtn from '../../images/body/add_btn.png';

const FolderList = () => {
  return (
    <div className={styles.folderList}>
      <div className={styles.folder}>
        <img src={folder} alt="" />
        <div className="title">새 폴더</div>
      </div>

      <div className={styles.folder}>
        <img src={folder} alt="" />
        <div className="title">새 폴더</div>
      </div>

      <div className={styles.folder}>
        <img src={folder} alt="" />
        <div className="title">새 폴더</div>
      </div>

      <div className={styles.folder}>
        <img src={folder} alt="" />
        <div className="title">새 폴더</div>
      </div>

      <div className={styles.folder}>
        <img src={addBtn} alt="" />
      </div>
    </div>
  );
};

export default FolderList;
