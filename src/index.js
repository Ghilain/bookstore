import React from 'react';
import ReactDOM from 'react-dom';
// react router
import { BrowserRouter as Router } from 'react-router-dom';
// from redux
import { Provider } from 'react-redux';
import store from './redux/configureStore';
// component file
import BookstoreContainer from './pages/appcontainer';
// style
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BookstoreContainer />
      <Provider store={store}>
        <BookstoreContainer />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
