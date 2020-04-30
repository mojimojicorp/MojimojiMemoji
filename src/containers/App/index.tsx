import * as React from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import FolderList from '../../components/FolderList';

const App = () => {
  return <div className={styles.App}>
    <Header />
    <FolderList />
         </div>;
};

export default App;
