import React from 'react';

import { Checkbox } from '&components/checkbox';

import './styles.scss';

export function Footer() {
  const handleCloseAfterChoosing = () => {
    console.log('close');
  };

  return (
    <div>
      <Checkbox
        id={'hide'}
        value={false}
        text={'Close after choosing'}
        onChange={handleCloseAfterChoosing}
      />
    </div>
  );
}