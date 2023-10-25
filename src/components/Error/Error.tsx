import React, { FC, memo } from 'react';
import cn from 'classnames';

import { ErrorProps } from './Error.types';
import './styles.scss';

const Error: FC<ErrorProps> = (props) => {
  const { id, text, className } = props;

  return (
    <p key={id} className={cn('error', [className])}>
      {text}
    </p>
  );
};

const memoizedError = memo(Error);

export { memoizedError as Error };
