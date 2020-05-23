import React from 'react';
import styles from './styles.scss';

const MemoSetting = () => {
  return (
    <div className={styles.memo_setting}>
      <div className={styles.buttons}>
        <div className={styles.move_btn}>
          <div className={styles.move_icon} />
          메모 이동
        </div>
        <div className={styles.delete_btn}>
          <div className={styles.delete_icon} />
          메모 삭제
        </div>
      </div>
    </div>
  );
};

export default MemoSetting;
