import React from 'react';
import { useStore } from 'effector-react';
import { isEmpty } from 'ramda';

import { $filteredIcons } from '&models/icons';
import { $searchQuery } from '&models/search';

import { EmptyScreen } from '../empty_screen';
import { IconList } from '../icon_list';
import styles from './icons_view.styles.scss';

export function IconsView() {
  const icons = useStore($filteredIcons);
  const searchQuery = useStore($searchQuery);

  return (
    <div className={styles.root}>
      {!isEmpty(icons) ? <IconList icons={icons} /> : <EmptyScreen query={searchQuery} />}
    </div>
  );
}
