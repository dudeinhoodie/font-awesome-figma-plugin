import React from 'react';

import { updateCategory } from '&models/categories';

import { Props } from './category.types';
import { useEvent } from 'effector-react';
import styles from './category.styles.scss';
import classNames from 'classnames';

export function Category({ category, index }: Props) {
  const updateCategoryFn = useEvent(updateCategory);

  const handleCategoryClick = () => {
    updateCategoryFn({ index, category });
  };

  return (
    <div
      className={classNames(styles.root, {
        [styles.active]: category.isActive,
      })}
      onClick={handleCategoryClick}
    >
      <span className={styles.name}>{category.name}</span>
    </div>
  );
}
