import React, { memo } from 'react';
import cn from 'classnames';

import { ErrorProps } from './Error.types';
import './styles.scss';

const Error = ({ id, text, className }: ErrorProps) => {
  return (
    <p key={id} className={cn('error', [className])}>
      {text}
    </p>
  );
};

const memoizedError = memo(Error);

export { memoizedError as Error };
