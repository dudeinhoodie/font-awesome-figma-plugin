import React, { memo, useRef } from 'react';
import { useEvent } from 'effector-react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { pickIcon } from '&models/icons';

import { Props } from './icon.types';
import styles from './icon.styles.scss';

function Icon({ icon, className, size = '1x' }: Props) {
  const pickIconFn = useEvent(pickIcon);
  const ref = useRef(null);

  const handleClick = () => {
    const [width, height] = icon.icon;
    const name = icon.iconName;
    const content = ref.current.outerHTML;

    pickIconFn({ content, name, width, height });
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <div className={styles.icon}>
        <FontAwesomeIcon
          icon={icon}
          forwardedRef={ref}
          className={classNames(styles.faIcon, className)}
          size={size}
        />
      </div>
      <span className={styles.name}>{icon.iconName}</span>
    </div>
  );
}

const MemoizedIcon = memo(Icon);

export { MemoizedIcon as Icon };
