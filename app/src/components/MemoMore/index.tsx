import React from 'react';
import styles from './styles.scss';

const MemoMore = () => {
  return (
    <div className={styles.memoMore}>
      <div className={styles.moveBtn}>
        <div className={styles.moveIcon} />
        메모 이동
      </div>
      <div className={styles.deleteBtn}>
        <div className={styles.deleteIcon} />
        메모 삭제
      </div>
    </div>
  );
};

export default MemoMore;
