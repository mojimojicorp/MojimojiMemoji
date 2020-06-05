import React from 'react';

import styles from './styles.scss';
import colors from './colors';

type FolderProps = {
  color: string;
};

const Folder = (props: FolderProps) => {
  const { color } = props;

  return (
    <div className={styles.folder_container}>
      <div
        className={styles.folder_header}
        style={{ backgroundColor: colors[color].head }}
      />
      <div
        className={styles.folder_body}
        style={{ backgroundColor: colors[color].body }}
      />
    </div>
  );
};

Folder.defaultProps = {
  color: 'yellow',
};

export default Folder;
