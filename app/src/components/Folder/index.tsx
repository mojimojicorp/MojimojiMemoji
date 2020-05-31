import React from 'react';

import styles from './styles.scss';

type FolderProps = {
  color: string
};

const Folder = (props: FolderProps) => {
  const { color } = props;

  return (
    <div className={styles.folder_container}>
      <div className={styles.folder_header} style={{ backgroundColor:color }} />
      <div className={styles.folder_body} style={{ backgroundColor:color }} />
    </div>
  );
};

Folder.defaultProps = {
  color: '#ffc928'
};

export default Folder;
