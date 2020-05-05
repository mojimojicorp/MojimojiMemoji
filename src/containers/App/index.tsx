import * as React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import FolderList from '../../components/FolderList';
import MemoList from '../../components/MemoList';
import MemoEditPage from '../MemoEditPage';

const App = () => {
  return (
    <div className={styles.App}>
      <MemoEditPage />
    </div>
  );
};

export default App;
