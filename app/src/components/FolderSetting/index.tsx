import React from 'react';
import classnames from 'classnames/bind';

import styles from './styles.scss';

const cx = classnames.bind({ ...styles });

type folderSettingProps = {
  canNameChange?: boolean;
  canColorChange?: boolean;
  canFolderDelete?: boolean;
};

const FolderSetting = ({
  canNameChange,
  canColorChange,
  canFolderDelete,
}: folderSettingProps) => {
  return (
    <div className={styles.folder_setting}>
      <div className={styles.buttons}>
        <div className={cx('color_btn', { active: canColorChange })}>
          <div className={styles.color_picker}>
            <div className={styles.color} />
            <div className={styles.picker} />
          </div>
          색상 변경
        </div>

        <div className={cx('rename_btn', { active: canNameChange })}>
          <div className={styles.rename_icon} />
          이름 변경
        </div>

        <div className={cx('delete_btn', { active: canFolderDelete })}>
          <div className={styles.delete_icon} />
          폴더 삭제
        </div>
      </div>
    </div>
  );
};

export default FolderSetting;
