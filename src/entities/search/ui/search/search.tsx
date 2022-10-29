import React, { ChangeEvent } from 'react';

import { SearchProps } from './search.types';

export function Search({ value, onChange, className }: SearchProps) {
  const handleChangeQuery = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    onChange(value);
  };

  return (
    <div className={className}>
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
