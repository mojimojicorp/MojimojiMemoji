import React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import Memo from '../../components/Memo';
import MemoSetting from '../../components/MemoSetting';

const MemoListPage = () => {
  return (
    <>
      <Header />
      <MemoSetting />

      <section className={styles.memo_list_container}>
        <Memo />
        <Memo />
        <Memo />

        <div className={styles.add_memo_btn}>
          <div className={styles.add} />
          메모 추가
        </div>
      </section>
    </>
  );
};

export default MemoListPage;
