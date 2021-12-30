import { useMemo } from 'react';
import { findIconDefinition, library, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition, IconPack } from '@fortawesome/fontawesome-common-types';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Collection } from './icons_view.types';

library.add(far, fab, fas);

export function mapIcons(lib: IconPack, name: IconPrefix, query: string): IconDefinition[] {
  const iconKeys = Object.keys(lib);
  const values = iconKeys.map((key: string) => {
    return findIconDefinition({ prefix: name, iconName: lib[key].iconName });
  });

  if (query) {
    return values.filter((icon) => icon.iconName.includes(query));
  }

  return values;
}

export function useIcons(query: string): Collection[] {
  const regular = mapIcons(far, 'far', query);
  const brands = mapIcons(fab, 'fab', query);
  const solid = mapIcons(fas, 'fas', query);

  return useMemo(
    () => [
      { title: 'Regular', icons: regular },
      { title: 'Solid', icons: solid },
      { title: 'Brands', icons: brands },
    ],
    [query]
  );
}
