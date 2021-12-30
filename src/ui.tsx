import React from 'react';
import * as ReactDOM from 'react-dom';

import { Search } from './ui/search';
import { Footer } from './ui/footer';
import { useQuery } from './ui/hooks';
import { IconsView } from './ui/icons_view';
import { PluginContext } from './utils/ui.context';
import styles from './ui.styles.scss';

function App() {
  const { query, onChange } = useQuery();
  const contextValue = {
    query,
  };

  return (
    <div className={styles.root}>
      <PluginContext.Provider value={contextValue}>
        <Search query={query} onChange={onChange} />
        <IconsView />
        {/*<Footer />*/}
      </PluginContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-page'));
