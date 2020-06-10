import React from 'react';

import styles from './styles.scss';

function makeURL() {
  // url 메모장에 삽입 후
  // tooltip 닫기
}

const Tooltip = () => {
  return (
    <div className={styles.tooltip_container}>
      <div className={styles.tip} />
      <input type="text" placeholder="URL" />
      <button type="button" onClick={makeURL}>
        확인
      </button>
    </div>
  );
};

export default Tooltip;
