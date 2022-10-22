import React from 'react';
import { useEvent } from 'effector-react';

import { categoryUpdated } from '&models/categories';

import { Props } from './category.types';

export function Category({ category, index }: Props) {
  const updateCategoryFn = useEvent(categoryUpdated);

  const handleCategoryClick = () => {
    updateCategoryFn({ index, category });
  };

  return (
    <div className="switch">
      <input
        id={category.name as string}
        checked={category.isActive}
        onChange={handleCategoryClick}
        type="checkbox"
        className="switch__toggle"
      />
      <label className="switch__label" htmlFor={category.name as string}>
        {category.name}
      </label>
    </div>
  );
}
