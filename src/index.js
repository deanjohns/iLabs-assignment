import React from 'react';
import { Front } from './pages';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './store/reducers';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Front} />
        </Switch>
      </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
