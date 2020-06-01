import React from 'react';

import Header from '../../components/Header';
import styles from './styles.scss';

const MemoEditPage = () => {
  function format(command: string) {
    console.log(command);
  }

  return (
    <div className={styles.edit_container}>
      <Header hasSaveBtn={true} hasBackBtn={true} />

      <div className={styles.toolbar}>
        <div className={styles.bold} onClick={() => format('bold')} />
        <div className={styles.italic} onClick={() => format('italic')} />
        <div className={styles.underline} onClick={() => format('underline')} />
        <div
          className={styles.removeline}
          onClick={() => format('strikeThrough')}
        />
        <div className={styles.divider} />
        <div className={styles.align} />
        <div className={styles.divider} />
        <div className={styles.link} />
        <div className={styles.image} />
        <div className={styles.table} />
        <div className={styles.logo} />
        <div className={styles.folder} />
      </div>
      <div className={styles.edit_area} contentEditable="true" />
    </div>
  );
};

export default MemoEditPage;
