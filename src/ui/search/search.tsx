import React, { ChangeEvent } from 'react';

import { Input } from '&components/input/input';

import { Props } from './search.types';
import styles from './search.styles.scss';

export function Search({ query, onChange }: Props) {
  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    onChange(value);
  };

  return (
    <div className={styles.root}>
      <Input
        id={'search'}
        value={query}
        onChange={handleChangeQuery}
        placeholder={'Just type icon name...'}
        autofocus
      />
    </div>
  );
}
