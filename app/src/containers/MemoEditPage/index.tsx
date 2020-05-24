import React from 'react';

import Header from '../../components/Header';
import styles from './styles.scss';

const MemoEditPage = () => {
  return (
    <div className={styles.edit_container}>
      <Header hasSaveBtn={true} hasBackBtn={true} />
      
      <div className={styles.toolbar}>
        <div className={styles.bold} />
        <div className={styles.italic} />
        <div className={styles.underline} />
        <div className={styles.removeline} />
        <div className={styles.divider} />
        <div className={styles.align} />
        <div className={styles.divider} />
        <div className={styles.link} />
        <div className={styles.image} />
        <div className={styles.table} />
        <div className={styles.logo} />
        <div className={styles.folder} />
      </div>
      <div className={styles.edit_area} />
    </div>
  );
};

export default MemoEditPage;
