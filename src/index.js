import React from 'react';
import ReactDOM from 'react-dom';
// react router
import { BrowserRouter } from 'react-router-dom';
// from redux
import { Provider } from 'react-redux';
import store from './redux/configureStore';
// component file
import BookstoreContainer from './pages/appcontainer';
// style
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BookstoreContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
