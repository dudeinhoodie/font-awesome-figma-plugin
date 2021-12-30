import React, { memo, useRef } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Props } from './icon.types';
import styles from './icon.styles.scss';

function Icon({ icon, className, size = '1x' }: Props) {
  const ref = useRef(null);

  const handleClick = () => {
    const [width, height] = icon.icon;
    const name = icon.iconName;
    const content = ref.current.outerHTML;

    parent.postMessage(
      {
        pluginMessage: {
          type: 'pick-icon',
          values: {
            content,
            name,
            width: width / 20,
            height: height / 20,
          },
        },
      },
      '*'
    );
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <FontAwesomeIcon
        icon={icon}
        forwardedRef={ref}
        className={classNames(styles.icon, className)}
        size={size}
      />
    </div>
  );
}

const MemoizedIcon = memo(Icon);

export { MemoizedIcon as Icon };
