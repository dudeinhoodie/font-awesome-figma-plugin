import React, { FC, memo, ReactElement } from 'react';
import { concatClassName } from '../../utils/helper';
import { ButtonProps } from './Button.types';
import './style.scss';

const Button: FC<ButtonProps> = (props): ReactElement<HTMLButtonElement> => {
  const { type, onClick, isSelected, className, title, css, disabled, iconLeft, iconRight } = props;
  const cn = concatClassName('button', [
    className,
    type ? `button--${type}` : '',
    isSelected ? 'selected' : '',
  ]);

  const handleClick = (event: React.MouseEvent): void => {
    if (onClick && !disabled) {
      onClick(event);
    }
  };

  return (
    <button onClick={handleClick} className={cn} disabled={disabled}>
      {iconLeft && <div className="button__icon-container">{React.cloneElement(iconLeft)}</div>}
      {title}
      {iconRight && <div className="button__icon-container">{React.cloneElement(iconRight)}</div>}
    </button>
  );
};

const memoizedButton = memo(Button);

export { memoizedButton as Button };
