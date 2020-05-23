import React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import MemoSetting from '../../components/MemoSetting';

const MemoListPage = () => {
  return (
    <>
      <Header path="memo-list" />
      <MemoSetting />

      <div className={styles.memo_list_container}>
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

        <div className={styles.add_memo_btn}>
          <div className={styles.add} />
          메모 추가
        </div>
      </div>
    </>
  );
};

export default MemoListPage;
