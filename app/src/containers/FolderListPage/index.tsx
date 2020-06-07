import React, { useState } from 'react';
import classnames from 'classnames/bind';

import styles from './styles.scss';
import Header from '../../components/Header';
import Folder from '../../components/Folder';
import folders from '../../mock/folders';
import FolderSetting from '../../components/FolderSetting';

const cx = classnames.bind({ ...styles });

const FolderListPage = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [selectedFolders, setSelectedFolders] = useState<number[]>([]);

  const handleFolderClick = (id: number) => {
    if (!isSelecting) return;

    if (selectedFolders.includes(id)) {
      const newSelectedFolders = [...selectedFolders];
      const index = selectedFolders.indexOf(id);
      newSelectedFolders.splice(index, 1);
      setSelectedFolders(newSelectedFolders);
      return;
    }

    setSelectedFolders([...selectedFolders, id]);
  };

  return (
    <>
      <Header
        hasSelectBtn={true}
        hasLogoutBtn={true}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
        setSelectedFolders={setSelectedFolders}
      />
      {isSelecting && (
        <FolderSetting
          canColorChange={selectedFolders.length >= 1}
          canNameChange={selectedFolders.length === 1}
          canFolderDelete={selectedFolders.length >= 1}
        />
      )}

      <div className={styles.folder_container}>
        <div className={styles.folder_list}>
          {folders.map((folder) => {
            return (
              <div
                className={cx('folder', {
                  selected: selectedFolders.includes(folder.id),
                })}
                key={folder.id}
                onClick={() => handleFolderClick(folder.id)}
              >
                <Folder color={folder.color} />
                <div className={styles.title}>{folder.name}</div>
              </div>
            );
          })}
          <div className={styles.add} />
        </div>
      </div>
    </>
  );
};

export default FolderListPage;
