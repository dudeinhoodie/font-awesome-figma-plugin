import React from 'react';
import cn from 'classnames';
import './style.scss';
import { LabelProps } from './Label.types';

const Label = ({ text, className }: LabelProps) => {
  return <span className={cn('label', [className])}>{text}</span>;
};

export default Label;
