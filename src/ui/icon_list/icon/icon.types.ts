import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconLookup } from '@fortawesome/fontawesome-common-types';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type Props = {
  icon: IconDefinition & IconLookup;
  className?: string;
  // size?: SizeProp;
};
