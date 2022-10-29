import React from 'react';
import { useUnit } from 'effector-react';

import { searchService } from '../models';
import { Search } from '../ui/search';

import styles from './search.styles.scss';

export const SearchContainer = () => {
  const { value, onChange } = useUnit({
    value: searchService.outputs.$query,
    onChange: searchService.inputs.searchQueryChanged,
  });

  return (
    <Search
      value={value}
      onChange={onChange}
      className={styles.search}
    />
  );
};
