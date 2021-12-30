import { createDomain } from 'effector';

import { getActiveCategories, makeCategories } from './lib';
import { Category } from './types';

const categoriesDomain = createDomain();

const $categories = categoriesDomain.createStore<Category[]>(makeCategories());
const $activeCategories = $categories.map(getActiveCategories);

const updateCategory = categoriesDomain.createEvent<{ index: number; category: Category }>();

export { $categories, updateCategory };
