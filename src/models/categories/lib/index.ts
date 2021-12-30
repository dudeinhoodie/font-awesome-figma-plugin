import * as R from 'ramda';

import { Category, PackType } from '../types';

export function makeCategories(): Category[] {
  return R.compose(
    R.map((category) => ({ name: category, isActive: true })),
    R.keys
  )(PackType);
}

export function updateCategories(index: number, category: Category, categories: Category[]) {
  return R.update(index, R.assoc('isActive', !category.isActive, category), categories);
}

export function getActiveCategories(categories: Category[]) {
  return R.filter((category) => R.equals(R.path(['isActive'], category), true), categories);
}
