import React, { FC, ReactElement } from 'react';
import { concatClassName } from '../../utils/helper';
import './style.scss';

type ButtonProps = {
  onClick: Function;
  title: string;
  css?: string;
  type?: string;
  disabled?: boolean;
  isSelected?: boolean;
  className?: string;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
};

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
    <button onClick={handleClick} style={css} className={cn} disabled={disabled}>
      {iconLeft && <div className="button__icon-container">{React.cloneElement(iconLeft)}</div>}
      {title}
      {iconRight && <div className="button__icon-container">{React.cloneElement(iconRight)}</div>}
    </button>
  );
};

export default Button;
