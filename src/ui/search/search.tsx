import React, { ChangeEvent } from 'react';
import { useEvent, useStore } from 'effector-react';

import { $searchQuery, setSearchQuery } from '&models/search';

import styles from './search.styles.scss';

export function Search() {
  const searchQuery = useStore($searchQuery);
  const setSearchQueryFn = useEvent(setSearchQuery);

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchQueryFn(value);
  };

  return (
    <div className={styles.root}>
      <div className="input input--with-icon">
        <div className="icon icon--search-large" />
        <input
          type="input"
          className="input__field"
          value={searchQuery}
          placeholder={'Search icons for...'}
          onChange={handleChangeQuery}
        />
      </div>
    </div>
  );
}
