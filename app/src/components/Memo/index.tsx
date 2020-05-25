import React from 'react';

import styles from './styles.scss';

const Memo = () => {
  return (
    <div className={styles.memo}>
      <span className={styles.text}> 메모입니다. </span>
      <span className={styles.date}>작성일 YYYY-MM-DD</span>
    </div>
  );
};

export default Memo;
