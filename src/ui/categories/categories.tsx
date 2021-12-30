import React from 'react';
import { useStore } from 'effector-react';

import { $categories } from '&models/categories';

import { Props } from './categories.types';
import { Category } from './category';
import styles from './categories.styles.scss';

export function Categories(props: Props) {
  const categories = useStore($categories);

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li key={category.name} className={styles.element}>
            <Category category={category} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}
