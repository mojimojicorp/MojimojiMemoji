import React from 'react';
import styles from './styles.scss';

const FolderMore = () => {
  return (
    <div className={styles.folderMore}>
      <div className={styles.colorBtn}>
        <div className={styles.color} />
        <div className={styles.picker} />
      </div>
      <div className={styles.moveBtn}>
        <div className={styles.moveIcon} />
        폴더 이동
      </div>
      <div className={styles.deleteBtn}>
        <div className={styles.deleteIcon} />
        폴더 삭제
      </div>
    </div>
  );
};

export default FolderMore;
