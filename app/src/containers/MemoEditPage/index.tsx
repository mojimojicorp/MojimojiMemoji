import React, { useState } from 'react';
import classnames from 'classnames/bind';

import Header from '../../components/Header';
import Tooltip from '../../components/Tooltip';
import styles from './styles.scss';

const cx = classnames.bind({ ...styles });

const MemoEditPage = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [isBoldActive, setIsBoldActive] = useState<boolean>(false);
  const [isItalicActive, setIsItalicActive] = useState<boolean>(false);
  const [isUnderlineActive, setIsUnderlineActive] = useState<boolean>(false);
  const [isStrikeActive, setIsStrikeActive] = useState<boolean>(false);
  const [alignStatus, setAlignStatus] = useState<string>('left');
  const [isLinkOpen, setIsLinkOpen] = useState<boolean>(false);

  const format = (command: string) => {
    document.execCommand(command);
  };

  const handleMouseDown = (target: string) => {
    if (target === 'bold') {
      setIsBoldActive(true);
    } else if (target === 'italic') {
      setIsItalicActive(true);
    } else if (target === 'underline') {
      setIsUnderlineActive(true);
    } else if (target === 'strikeThrough') {
      setIsStrikeActive(true);
    }
  };

  const handleMouseUp = (target: string) => {
    if (target === 'bold') {
      setIsBoldActive(false);
    } else if (target === 'italic') {
      setIsItalicActive(false);
    } else if (target === 'underline') {
      setIsUnderlineActive(false);
    } else if (target === 'strikeThrough') {
      setIsStrikeActive(false);
    }
  };

  const handleAlign = () => {
    const edit_area = document.getElementById('edit_area');

    if (alignStatus === 'left') {
      edit_area.setAttribute('align', 'center');
      setAlignStatus('center');
    } else if (alignStatus === 'center') {
      edit_area.setAttribute('align', 'right');
      setAlignStatus('right');
    } else if (alignStatus === 'right') {
      edit_area.setAttribute('align', 'justify');
      setAlignStatus('justify');
    } else if (alignStatus === 'justify') {
      edit_area.setAttribute('align', 'left');
      setAlignStatus('left');
    }
  };

  const handleLinkClick = () => {
    // 클릭효과 (아이콘 깜빡)

    // Tooltip
    setIsLinkOpen(true);
  };

  return (
    <div className={styles.edit_container}>
      <Header
        hasSaveBtn={true}
        hasBackBtn={true}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
      />

      <div className={styles.toolbar}>
        <input
          type="button"
          className={cx('bold', { active: isBoldActive })}
          onMouseDown={() => {
            format('bold');
            handleMouseDown('bold');
          }}
          onMouseUp={() => handleMouseUp('bold')}
        />
        <input
          type="button"
          className={cx('italic', { active: isItalicActive })}
          onMouseDown={() => {
            format('italic');
            handleMouseDown('italic');
          }}
          onMouseUp={() => handleMouseUp('italic')}
        />
        <input
          type="button"
          className={cx('underline', { active: isUnderlineActive })}
          onMouseDown={() => {
            format('underline');
            handleMouseDown('underline');
          }}
          onMouseUp={() => handleMouseUp('underline')}
        />
        <input
          type="button"
          className={cx('strike', { active: isStrikeActive })}
          onMouseDown={() => {
            format('strikeThrough');
            handleMouseDown('strikeThrough');
          }}
          onMouseUp={() => handleMouseUp('strikeThrough')}
        />
        <input type="button" className={styles.divider} />

        <input
          type="button"
          className={cx('align', alignStatus)}
          onClick={handleAlign}
        />

        <input type="button" className={styles.divider} />

        <button
          type="button"
          className={styles.link}
          id="link_input"
          onClick={handleLinkClick}
        >
          {isLinkOpen && <Tooltip />}
        </button>
        <input type="button" className={styles.image} />
        <input type="button" className={styles.table} />
        <input type="button" className={styles.logo} />
        <input type="button" className={styles.folder} />
      </div>
      <div className={styles.edit_area} id="edit_area" contentEditable="true" />
    </div>
  );
};

export default MemoEditPage;
