import React from 'react';
import * as ReactDOM from 'react-dom';

import { Home } from '&pages/home';

import styles from './app.styles.scss';

function App() {
  return (
    <div className={styles.root}>
      <Home />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-page'));
