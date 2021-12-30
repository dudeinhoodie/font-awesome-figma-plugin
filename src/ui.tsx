import React from 'react';
import * as ReactDOM from 'react-dom';

import { Search } from './ui/search';
import { Categories } from './ui/categories';
import { useSearchQuery } from './ui/hooks';
import { IconsView } from './ui/icons_view';
import { PluginContext } from './utils/ui.context';
import styles from './ui.styles.scss';
import './models';

function App() {
  const { query, onChange } = useSearchQuery();
  const contextValue = {
    query,
  };

  return (
    <div className={styles.root}>
      <PluginContext.Provider value={contextValue}>
        <Search query={query} onChange={onChange} />
        <Categories />
        <IconsView />
      </PluginContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-page'));
