import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import React, { memo } from 'react';

import styles from './empty_screen.styles.scss';
import { Props } from './empty_screen.types';

export const EmptyScreen = memo(({ children, icon, className }: Props) => {
  return (
    <div className={cx(styles.root, className)}>
      {icon && <FontAwesomeIcon icon={icon} size={'lg'} className={styles.icon} />}
      {children}
    </div>
  );
});
