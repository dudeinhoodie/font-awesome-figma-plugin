import React, { ChangeEvent } from 'react';

import { Props } from './search.types';
import styles from './search.styles.scss';

export function Search({ query, onChange }: Props) {
  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    onChange(value);
  };

  return (
    <div className={styles.root}>
      <input
        type="text"
        value={query}
        className={styles.input}
        onChange={handleChangeQuery}
        placeholder={'Search icons for...'}
        autoFocus
      />
    </div>
  );
}
