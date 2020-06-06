import React, { useState } from 'react';

import Header from '../../components/Header';
import styles from './styles.scss';

const MemoEditPage = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [isBoldActive, setIsBoldActive] = useState<boolean>(false);
  const [isItalicActive, setIsItalicActive] = useState<boolean>(false);
  const [isUnderlineActive, setIsUnderlineActive] = useState<boolean>(false);
  const [isStrikeActive, setIsStrikeActive] = useState<boolean>(false);
  const [alignStatus, setAlignStatus] = useState<string>('left');

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

  const handleAlign = () => {};

  return (
    <div className={styles.edit_container}>
      <Header
        hasSaveBtn={true}
        hasBackBtn={true}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
      />

      <div className={styles.toolbar}>
        <button
          className={`${styles.bold}
            ${isBoldActive ? styles.active : ''}
            `}
          onMouseDown={() => {
            format('bold');
            handleMouseDown('bold');
          }}
          onMouseUp={() => handleMouseUp('bold')}
        />

        <button
          className={`${styles.italic} ${isItalicActive ? styles.active : ''}
            `}
          onMouseDown={() => {
            format('italic');
            handleMouseDown('italic');
          }}
          onMouseUp={() => handleMouseUp('italic')}
        />
        <button
          className={`${styles.underline} ${
            isUnderlineActive ? styles.active : ''
          }`}
          onMouseDown={() => {
            format('underline');
            handleMouseDown('underline');
          }}
          onMouseUp={() => handleMouseUp('underline')}
        />
        <button
          className={`${styles.strike} ${isStrikeActive ? styles.active : ''}`}
          onMouseDown={() => {
            format('strikeThrough');
            handleMouseDown('strikeThrough');
          }}
          onMouseUp={() => handleMouseUp('strikeThrough')}
        />
        <button className={styles.divider} />

        <button className={styles.align} onClick={handleAlign} />

        <button className={styles.divider} />

        <button className={styles.link} />
        <button className={styles.image} />
        <button className={styles.table} />
        <button className={styles.logo} />
        <button className={styles.folder} />
      </div>
      <div className={styles.edit_area} contentEditable="true" />
    </div>
  );
};

export default MemoEditPage;
