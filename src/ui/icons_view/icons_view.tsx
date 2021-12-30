import React from 'react';
import { isEmpty } from 'ramda';

import { usePluginContext } from '../../utils/ui.context';
import { IconList } from '../icon_list';
import { useIcons } from './icons_view.utils';
import styles from './icons_view.styles.scss';

export function IconsView() {
  const { query } = usePluginContext();
  const collections = useIcons(query);

  return (
    <div className={styles.root}>
      {collections.map(({ icons }) => !isEmpty(icons) && <IconList icons={icons} />)}
    </div>
  );
}
