import React, { ChangeEvent } from 'react';
import cx from 'classnames';

import { $searchQuery, setSearchQuery } from '&models/search';

import { SearchProps } from './search.types';
import styles from './search.styles.scss';

export function Search({ value, onChange, className }: SearchProps) {
  const handleChangeQuery = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    onChange(value);
  };

  return (
    <div className={cx(className, styles.root)}>
      <div className="input input--with-icon">
        <div className="icon icon--search-large" />
        <input
          type="input"
          className="input__field"
          value={value}
          placeholder={'Search icons for...'}
          onChange={handleChangeQuery}
        />
      </div>
    </div>
  );
}
