import * as R from 'ramda';

import { Category, PackType } from '&models/categories/types';

export function makeCategories(): Category[] {
  return R.compose(
    R.map((category) => ({ name: category, value: PackType[category], isActive: true })),
    R.keys
  )(PackType);
}
