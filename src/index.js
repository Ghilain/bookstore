import React from 'react';
import ReactDOM from 'react-dom';
// react router
import { BrowserRouter as Router } from 'react-router-dom';
// component file
import BookstoreContainer from './pages/appcontainer';
// style
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BookstoreContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
