import React, { FC, ReactElement } from 'react';
import cn from 'classnames';
import './style.scss';

type LabelProps = {
  text: string;
  className?: string;
};

const Label: FC<LabelProps> = (
  props
): ReactElement<HTMLSpanElement> => {
  const { text, className } = props;

  return <span className={cn('label', [className])}>{text}</span>;
};

export default Label;
