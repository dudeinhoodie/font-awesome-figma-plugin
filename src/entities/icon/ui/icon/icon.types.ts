import { IconName } from '@fortawesome/fontawesome-common-types';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconPrefix } from '@fortawesome/free-solid-svg-icons';

export type IconProps = {
  prefix: IconPrefix;
  name: IconName;
  onClick: ({ content, name }: { content: string; name: string }) => void;
  size?: SizeProp;
  className?: string;
};
