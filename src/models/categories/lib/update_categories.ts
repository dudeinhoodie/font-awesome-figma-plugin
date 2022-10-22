import * as R from 'ramda';

import { Category } from '&models/categories/types';

export function updateCategories(index: number, category: Category, categories: Category[]) {
  return R.update(index, R.assoc('isActive', !category.isActive, category), categories);
}
