import * as R from 'ramda';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { Category } from '&models/categories/types';
import { filterBySearchQuery } from '&models/icons/lib/filter_by_search_query';
import { filterByCategories } from '&models/icons/lib/filter_by_categories';

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
