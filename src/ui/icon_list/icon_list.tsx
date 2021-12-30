import React from 'react';

import { Icon } from './icon';
import { Props } from './icon_list.types';
import styles from './icon_list.styles.scss';

export function IconList({ icons, title }: Props) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>
        {icons.map((icon) => (
          <li key={icon.iconName} className={styles.element}>
            <Icon icon={icon} size={'1x'} />
          </li>
        ))}
      </ul>
    </div>
  );
}
