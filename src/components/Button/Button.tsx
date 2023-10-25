import React, { FC, memo, ReactElement } from 'react';
import cn from 'classnames';

import { ButtonProps } from './Button.types';
import './style.scss';

const Button: FC<ButtonProps> = (
  props
): ReactElement<HTMLButtonElement> => {
  const {
    type,
    onClick,
    isSelected,
    className,
    title,
    disabled,
    iconLeft,
    iconRight,
  } = props;

  const handleClick = (event: React.MouseEvent): void => {
    if (onClick && !disabled) {
      onClick(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'button',
        {
          [`button--${type}`]: type !== 'default',
          ['selected']: isSelected,
        },
        className
      )}
      disabled={disabled}
    >
      {iconLeft && (
        <div className="button__icon-container">
          {React.cloneElement(iconLeft)}
        </div>
      )}
      {title}
      {iconRight && (
        <div className="button__icon-container">
          {React.cloneElement(iconRight)}
        </div>
      )}
    </button>
  );
};

const memoizedButton = memo(Button);

export { memoizedButton as Button };
