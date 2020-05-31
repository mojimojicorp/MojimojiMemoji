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
      <Route path="/folder-list" component={FolderListPage} />
      <Route path="/memo-list" component={MemoListPage} />
      <Route path="/memo-edit" component={MemoEditPage} />
    </div>
  );
};

export default App;
