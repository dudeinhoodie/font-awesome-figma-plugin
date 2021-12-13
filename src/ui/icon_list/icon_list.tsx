import React from 'react';

import { Props } from './icon_list.types';
import styles from './icon_list.styles.scss';

export function IconList(props: Props) {


  return (
    <div className={styles.root}>
      <ul>
        <li>icon</li>
      </ul>
    </div>
  );
}
