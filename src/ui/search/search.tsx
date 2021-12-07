import React from 'react';

import Input from '&components/Input/Input';

import { Props } from './search.types';
import styles from './search.styles.scss';

export function Search(props: Props) {
  console.log(styles);

  return (
    <div className={styles.root}>
      <Input id={'d'} />
      search
    </div>
  );
}
