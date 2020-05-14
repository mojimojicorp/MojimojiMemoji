import React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import MemoMore from '../../components/MemoMore';

const MemoListPage = () => {
  return (
    <>
      <Header />
      <MemoMore />

      <div className={styles.memoList}>
        <div className={styles.memo}>
          <div className={styles.text}> 메모입니다. </div>
          <div className={styles.date}>작성일 YYYY-MM-DD</div>
        </div>

        <div className={styles.memo}>
          <div className={styles.text}> 메모입니다. </div>
          <div className={styles.date}>작성일 YYYY-MM-DD</div>
        </div>

        <div className={styles.memo}>
          <div className={styles.text}> 메모입니다. </div>
          <div className={styles.date}>작성일 YYYY-MM-DD</div>
        </div>

        <div className={styles.addMemoBtn}>
          <div className={styles.add} />
          메모 추가
        </div>
      </div>
    </>
  );
};

export default MemoListPage;
