import React from 'react';
import styles from './styles.scss';

const FolderSetting = () => {
  return (
    <div className={styles.folder_setting}>
      <div className={styles.buttons}>
        <div className={styles.color_btn}>
          <div className={styles.color_picker}>
            <div className={styles.color} />
            <div className={styles.picker} />
          </div>
          색상 변경
        </div>

        <div className={styles.rename_btn}>
          <div className={styles.rename_icon} />
          이름 변경
        </div>

        <div className={styles.delete_btn}>
          <div className={styles.delete_icon} />
          폴더 삭제
        </div>
      </div>
    </div>
  );
};

export default FolderSetting;
