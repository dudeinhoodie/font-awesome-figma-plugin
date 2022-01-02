import React from 'react';
import * as ReactDOM from 'react-dom';

import { Search } from './ui/search';
import { Categories } from './ui/categories';
import { IconsView } from './ui/icons_view';
import styles from './ui.styles.scss';
import './models';

function App() {
  return (
    <div className={styles.root}>
      <Search />
      <Categories />
      <IconsView />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-page'));
