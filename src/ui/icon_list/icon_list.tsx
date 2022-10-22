import React from 'react';

import { Icon } from './icon';
import styles from './icon_list.styles.scss';
import { Props } from './icon_list.types';

export function IconList({ icons }: Props) {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {icons.map((icon) => (
          <li key={`${icon.prefix}-${icon.iconName}`} className={styles.element}>
            <div>123</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
