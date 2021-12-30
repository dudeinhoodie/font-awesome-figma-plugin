import * as R from 'ramda';

import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { PackType } from './icons_view.types';

const ICONS = R.concat(R.values(far), R.values(fas), R.values(fab));

function filterBySearchQuery(query: string) {
  return function(icons: IconDefinition[]) {
    if (!query) {
      return icons;
    }

    return R.filter((icon) => R.includes(query, icon.iconName), icons);
  };
}

function filterByLibType(type: PackType) {
  return function(icons: IconDefinition[]) {
    if (!type) {
      return icons;
    }

    return R.filter((icon) => R.includes(type, icon.prefix), icons);
  };
}

export function useIcons(query: string, type?: PackType) {
  return R.compose(
    filterByLibType(type),
    filterBySearchQuery(query),
    R.sortBy(R.prop('iconName'))
  )(ICONS);
}
