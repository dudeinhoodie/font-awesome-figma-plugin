import * as R from 'ramda';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { Category } from '&models/categories/types';

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
