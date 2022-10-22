import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import classNames from 'classnames';
import React, { useCallback, useRef } from 'react';

import styles from './icon.styles.scss';
import { IconProps } from './icon.types';

export const Icon = ({ className, prefix, name, onClick, size = '2x' }: IconProps) => {
  const ref = useRef<SVGSVGElement | null>(null);

  const handleClick = useCallback(() => {
    const content = ref.current.outerHTML;

    onClick({ content, name });
  }, [onClick, name]);

  return (
    <div className={cx(styles.root, className)} onClick={handleClick}>
      <div className={styles.icon}>
        <FontAwesomeIcon
          icon={[prefix, name]}
          size={size}
          forwardedRef={ref}
          className={classNames(styles.faIcon, className)}
        />
      </div>
      <span className={styles.name}>{name}</span>
    </div>
  );
};
