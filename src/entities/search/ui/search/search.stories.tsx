import React, { useState } from 'react';

import { Search } from './search';

export const Default = ({ value, ...args }) => {
  const [query, setQuery] = useState(value);

  return (
    <div style={{ margin: 20 }}>
      <Search {...args} value={query} onChange={(x) => setQuery(x)} />
    </div>
  );
};

export default {
  title: 'Entities/Search/Components/Search',
};
