import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  className?: string;
  icon?: IconProp;
};
