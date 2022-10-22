import * as R from 'ramda';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Category } from '&models/categories/types';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { filterByCategories, filterBySearchQuery } from '&models/icons/lib/index';

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
