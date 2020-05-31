import React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import Memo from '../../components/Memo';

const MemoListPage = () => {
  return (
    <>
      <Header hasSelectBtn={true} hasBackBtn={true} />

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
