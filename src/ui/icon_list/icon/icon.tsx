import React, { useRef } from 'react';
import { useEvent } from 'effector-react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { iconPicked } from '&models/icons';

import { Props } from './icon.types';
import styles from './icon.styles.scss';

export function Icon({ icon, className }: Props) {
  const pickIconFn = useEvent(iconPicked);
  const ref = useRef<SVGSVGElement | null>(null);

  const handleClick = () => {
    const name = icon.iconName;
    const content = ref.current.outerHTML;

    pickIconFn({ content, name });
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <div className={styles.icon}>
      </div>
      <span className={styles.name}>{icon.iconName}</span>
    </div>
  );
}
