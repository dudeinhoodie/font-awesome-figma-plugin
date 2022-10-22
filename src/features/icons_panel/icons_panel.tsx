import { useEvent, useStore } from 'effector-react';
import React, { ChangeEvent } from 'react';

import { Icon } from '&entities/icon/ui';
import { Search } from '&entities/search/ui/search/search';

import styles from './icons_panel.styles.scss';
import { IconsPanelProps } from './icons_panel.types';
import { iconsPanelModel } from './models';

export const IconsPanel = (props: IconsPanelProps) => {
  const searchQuery = useStore(iconsPanelModel.outputs.$query);
  const onChangeSearchQuery = useEvent(
    iconsPanelModel.inputs.searchQueryChanged
  );
  const icons = useStore(iconsPanelModel.outputs.$filteredIcons);

  console.log('icons');
  console.log(icons);

  const handleClick = (event) => {
    console.log(event);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeSearchQuery(event.target.value);
  };

  return (
    <div className={styles.panel}>
      <Search
        value={searchQuery}
        className={styles.search}
        onChange={handleSearchQueryChange}
        placeholder={'Search icons for...'}
      />
      <div className={styles.list}>
        {icons.map(
          ({
            iconName,
            prefix,
            // @ts-ignore
            key,
          }) => (
            <Icon
              name={iconName}
              prefix={prefix}
              onClick={handleClick}
              key={`${prefix}-${key}-${iconName}`}
            />
          )
        )}
      </div>
    </div>
  );
};
