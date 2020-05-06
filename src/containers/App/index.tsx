import * as React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import FolderListPage from '../FolderListPage';
import MemoListPage from '../MemoListPage';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <FolderListPage />
      <MemoListPage />
    </div>
  );
};

export default App;
