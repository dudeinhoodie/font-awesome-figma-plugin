import React from 'react';
import { useStore } from 'effector-react';
import { isEmpty } from 'ramda';

import { $filteredIcons } from '&models/icons';

import { IconList } from '../icon_list';
import styles from './icons_view.styles.scss';

export function IconsView() {
  const icons = useStore($filteredIcons);

  return (
    <div className={styles.root}>
      {!isEmpty(icons) ? <IconList icons={icons} /> : <span>Sorry, we can't find such icons</span>}
    </div>
  );
}
