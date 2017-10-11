import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouters from './AppRouters.jsx';

ReactDOM.render(
  <Router>
    <AppRouters />
  </Router>,
  document.querySelector('#app'),
);
