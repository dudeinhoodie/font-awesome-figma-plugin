import React, { memo } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Props } from './empty_screen.types';
import styles from './empty_screen.styles.scss';

const EmptyScreen = ({ query }: Props) => {
  return (
    <div className={styles.root}>
      Lorem ipsum.
    </div>
  );
};

const MemoEmptyScreen = memo(EmptyScreen);

export { MemoEmptyScreen as EmptyScreen };
