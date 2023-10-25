import React from 'react';
import cn from 'classnames';

import Label from '../Label/Label';
import './styles.scss';
import { InputProps } from './Input.types';

const Input = ({
  id,
  type = 'text',
  maxLength,
  onChange,
  value,
  className,
  label,
  disabled,
}: InputProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={cn('input-container', [className])}>
      {label && <Label text={label} />}
      <input
        id={id}
        type={type}
        className={cn('input-container__control', {
          ['input-container__control--disabled']: disabled,
        })}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;
