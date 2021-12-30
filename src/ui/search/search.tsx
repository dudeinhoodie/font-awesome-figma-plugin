import React, { ChangeEvent } from 'react';

import { $searchQuery, setSearchQuery } from '&models/search';

import styles from './search.styles.scss';
import { useEvent, useStore } from 'effector-react';

export function Search() {
  const searchQuery = useStore($searchQuery);
  const setSearchQueryFn = useEvent(setSearchQuery);

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchQueryFn(value);
  };

  return (
    <div className={styles.root}>
      <input
        type="text"
        value={searchQuery}
        className={styles.input}
        onChange={handleChangeQuery}
        placeholder={'Search icons for...'}
        autoFocus
      />
    </div>
  );
}
