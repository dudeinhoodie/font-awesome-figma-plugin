import React from 'react';

import { Icon } from '../icon';
import { Props } from './icon_list.types';
import styles from './icon_list.styles.scss';

export function IconList({ icons }: Props) {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {icons.map((icon) => (
          <li key={icon.iconName} className={styles.element}>
            <Icon icon={icon} size={'2x'} />
          </li>
        ))}
      </ul>
    </div>
  );
}
