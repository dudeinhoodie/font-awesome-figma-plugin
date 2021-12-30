import React from 'react';

import { Props } from './checkbox.types';
import styles from './checkbox.styles.scss';

export function Checkbox(props: Props) {
  const { id, text, value, onChange } = props;

  return (
    <div onClick={onChange} className={styles.root}>
      <input type="checkbox" id={id} checked={value} />
      {text && <label htmlFor={id} className={styles.label}>{text}</label>}
    </div>
  );
}

