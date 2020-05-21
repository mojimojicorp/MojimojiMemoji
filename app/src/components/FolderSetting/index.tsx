import React from 'react';
import styles from './styles.scss';

const FolderSetting = () => {
  return (
    <div className={styles.folder_setting}>
      <div className={styles.color_btn}>
        <div className={styles.color} />
        <div className={styles.picker} />
      </div>
      <div className={styles.move_btn}>
        <div className={styles.move_icon} />
        폴더 이동
      </div>
      <div className={styles.delete_btn}>
        <div className={styles.delete_icon} />
        폴더 삭제
      </div>
    </div>
  );
};

export default FolderSetting;
