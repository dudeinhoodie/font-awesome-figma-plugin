import React, { useEffect } from 'react';
import { selectMenu } from 'figma-plugin-ds';

export function Size() {
  useEffect(() => {
    selectMenu.init();
    // selectMenu.onChange();
  }, []);

  return (
    <div>
      <select
        id="id"
        className="select-menu"
        onClick={() => console.log('asdfasdfsadfsad')}
        onChange={() => console.log('asdfasdfsadfsad')}
        onSelect={() => console.log('asdfasdfsadfsad')}
        value={'3'}
      >
        <option>Please make a selection</option>
        <option
          value="2"
          onSelect={() => console.log('asdfasdfsadfsad')}
          onChange={() => console.log('asdfasdfsadfsad')}
        >
          Item 2
        </option>
        <option value="3">Item 3</option>
        <option value="4">Item 4</option>
      </select>
    </div>
  );
}
