import { $categories, updateCategory } from './index';
import { updateCategories } from './lib';

$categories.on(updateCategory, (state, { index, category }) =>
  updateCategories(index, category, state)
);
