import React, { FC, memo } from 'react';
import { concatClassName } from '../../utils/helper';
import { ErrorProps } from './Error.types';
import './styles.scss';

const Error: FC<ErrorProps> = (props) => {
  const { id, text, className } = props;
  const cnError = concatClassName('error', [className]);

  return (
    <p key={id} className={cnError}>
      {text}
    </p>
  );
};

const memoizedError = memo(Error);

export { memoizedError as Error };
