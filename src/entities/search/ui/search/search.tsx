import cx from 'classnames';
import React from 'react';

import styles from './search.styles.scss';
import { SearchProps } from './search.types';

export function Search({
  className,
  value,
  onChange,
  placeholder,
}: SearchProps) {
  return (
    <div className={cx(styles.root, className)}>
      <div className="input input--with-icon">
        <div className="icon icon--search-large" />
        <input
          type="input"
          className="input__field"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
