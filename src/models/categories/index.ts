import { createDomain } from 'effector';

import { Category } from './types';
import { getActiveCategories, makeCategories, updateCategories } from './lib';

const categoriesDomain = createDomain();

const $categories = categoriesDomain.createStore<Category[]>(makeCategories());

const $activeCategories = $categories.map(getActiveCategories);

const categoryUpdated = categoriesDomain.createEvent<{ index: number; category: Category }>();

$categories.on(categoryUpdated, (state, { index, category }) =>
  updateCategories(index, category, state)
);

export { $categories, $activeCategories, categoryUpdated };
