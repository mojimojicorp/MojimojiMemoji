import * as React from 'react';
import styles from './styles.scss';
import FolderListPage from '../FolderListPage';
import MemoListPage from '../MemoListPage';

const App = () => {
  return (
    <div className={styles.App}>
      <FolderListPage />
      <MemoListPage />
    </div>
  );
};

export default App;
