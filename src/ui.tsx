import React from 'react';
import * as ReactDOM from 'react-dom';

import { Search } from './ui/search';
import { useQuery } from './ui/hooks';

function App() {
  const { query, onChange } = useQuery();

  return (
    <div>
      <Search query={query} onChange={onChange} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-page'));
