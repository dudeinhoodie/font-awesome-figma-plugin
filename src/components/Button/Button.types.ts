import { ReactElement } from 'react';

export type ButtonProps = {
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
