import { ChangeEvent } from 'react';

export type Props = {
  id: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  className?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  maxLength?: number;
  autofocus?: boolean;
};
