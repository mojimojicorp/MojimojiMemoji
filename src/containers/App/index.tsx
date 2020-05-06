import * as React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import FolderListPage from '../FolderListPage';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <FolderListPage />
    </div>
  );
};

export default App;
