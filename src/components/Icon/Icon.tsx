import React from 'react';

import './icon.scss';
import { IconProps } from './Icon.types';

const Icon = ({ icon, onClick }: IconProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(icon);
    }
  };

  return (
    <div
      className="icons-container__element"
      onClick={handleClick}
      key={icon.name}
    >
      <div dangerouslySetInnerHTML={{ __html: icon.content }} />
    </div>
  );
};

export default Icon;
