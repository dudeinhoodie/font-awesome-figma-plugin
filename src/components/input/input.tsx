import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

import { Props } from './input.types';
import styles from './input.styles.scss';

export function Input(props: Props) {
  const {
    id,
    type = 'text',
    maxLength,
    placeholder,
    onChange,
    value,
    className,
    label,
    disabled,
    autofocus,
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      {label && <label className={styles.label} htmlFor={id}>{label}</label>}
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        autoFocus={autofocus}
        className={classNames(styles.input, { [styles.disabled]: disabled })}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        maxLength={maxLength}
      />
    </div>
  );
}
