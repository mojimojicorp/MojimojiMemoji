import React from 'react';

import Header from '../../components/Header';
import styles from './styles.scss';

import bold from '../../images/edit/bold.png';
import ialic from '../../images/edit/italic.png';
import image from '../../images/edit/image.png';
import align from '../../images/edit/align.png';
import link from '../../images/edit/link.png';
import removeline from '../../images/edit/removeline.png';
import underline from '../../images/edit/underline.png';
import divider from '../../images/edit/divider.png';
import table from '../../images/edit/table.png';
import logo from '../../images/icon_64x64.png';
import folder from '../../images/body/folder_btn.png';

const MemoEditPage = () => {
  return (
    <div className={styles.edit_container}>
      <Header />
      <div className={styles.toolbar}>
        <div className={styles.bold}>
          <img src={bold} alt="bold" />
        </div>
        <div className={styles.italic}>
          <img src={ialic} alt="ialic" />
        </div>
        <div className={styles.underline}>
          <img src={underline} alt="underline" />
        </div>
        <div className={styles.removeline}>
          <img src={removeline} alt="removeline" />
        </div>
        <div className={styles.divider}>
          <img src={divider} alt="divider" />
        </div>
        <div className={styles.align}>
          <img src={align} alt="align" />
        </div>
        <div className={styles.divider}>
          <img src={divider} alt="divider" />
        </div>
        <div>
          <img src={link} alt="link" />
        </div>
        <div>
          <img src={image} alt="imagefile" />
        </div>
        <div>
          <img src={table} alt="table" />
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.folder}>
          <img src={folder} alt="folder" />
        </div>
      </div>
      <div className={styles.edit_area} />
    </div>
  );
};

export default MemoEditPage;
