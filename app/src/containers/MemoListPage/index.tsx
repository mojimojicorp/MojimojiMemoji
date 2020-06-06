import React, { useState } from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import Memo from '../../components/Memo';

const MemoListPage = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);

  return (
    <>
      <Header
        hasSelectBtn={true}
        hasBackBtn={true}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
      />

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
