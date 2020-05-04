import * as React from 'react';
import { Route } from 'react-router-dom';
import styles from './styles.scss';
import Header from '../../components/Header';
import FolderList from '../../components/FolderList';
import MemoList from '../../components/MemoList';

const App = () => {
  return (
    <div className={styles.App}>
      <Route path="/" component={Header} />
      <Route path="/folderList" component={FolderList} />
      <Route path="/memoList" component={MemoList} />
    </div>
  );
};

export default App;
