import * as React from 'react';
import { Route } from 'react-router-dom';

import styles from './styles.scss';
import LoginPage from '../LoginPage';
import FolderListPage from '../FolderListPage';
import MemoListPage from '../MemoListPage';
import MemoEditPage from '../MemoEditPage';

const App = () => {
  return (
    <div className={styles.App}>
      <Route exact path="/" component={LoginPage} />
      <Route path="/folderList" component={FolderListPage} />
      <Route path="/memoList" component={MemoListPage} />
      <Route path="/memoEdit" component={MemoEditPage} />
    </div>
  );
};

export default App;
