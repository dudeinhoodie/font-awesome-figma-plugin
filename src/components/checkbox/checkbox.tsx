import React from 'react';
import { Props } from './types';
import './styles.scss';

export function Checkbox(props: Props) {
  const { id, text, value, onChange } = props;

  return (
    <div  onClick={onChange}>
      <input type="checkbox" id={id} checked={value} />
      {text && <label htmlFor={id}>{text}</label>}
    </div>
  );
}
