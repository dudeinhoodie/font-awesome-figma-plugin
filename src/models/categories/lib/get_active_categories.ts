import * as R from 'ramda';

import { Category } from '&models/categories/types';

export function getActiveCategories(categories: Category[]) {
  return R.filter((category) => R.equals(R.path(['isActive'], category), true), categories);
}
