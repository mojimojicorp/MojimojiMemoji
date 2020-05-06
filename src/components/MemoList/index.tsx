import React from 'react';
import styles from './styles.scss';
import moreBtn from '../../images/body/more_btn.png';

const MemoList = () => {
  return (
    <div className={styles.memoList}>
      <div className={styles.memo}>
        <div className={styles.text}> 메모입니다. </div>
        <img src={moreBtn} alt="" />
        <div className={styles.date}>작성일 YYYY-MM-DD</div>
      </div>

      <div className={styles.memo}>
        <div className={styles.text}> 메모입니다. </div>
        <img src={moreBtn} alt="" />
        <div className={styles.date}>작성일 YYYY-MM-DD</div>
      </div>

      <div className={styles.memo}>
        <div className={styles.text}> 메모입니다. </div>
        <img src={moreBtn} alt="" />
        <div className={styles.date}>작성일 YYYY-MM-DD</div>
      </div>
    </div>
  );
};

export default MemoList;
