import * as R from 'ramda';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Category } from '&models/categories/types';

export function filterBySearchQuery(query: string) {
  return function(icons: IconDefinition[]) {
    if (!query) {
      return icons;
    }

    return R.filter((icon) => R.includes(query, icon.iconName), icons);
  };
}

export function filterByCategories(categories: Category[] | []) {
  return function(icons: IconDefinition[]) {
    if (R.isEmpty(categories)) {
      return icons;
    }

    return R.filter(
      (icon) => R.includes(R.prop('prefix', icon), R.map(R.prop('value'), categories)),
      icons
    );
  };
}

export function initializeIcons() {
  return R.sortBy(R.prop('iconName'), [...R.values(far), ...R.values(fas), ...R.values(fab)]);
}

export function filterIcons(
  query: string,
  activeCategories: Category[] | [],
  icons: IconDefinition[]
) {
  return R.compose(
    filterBySearchQuery(query),
    filterByCategories(activeCategories)
  )(icons);
}
