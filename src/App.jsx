import React, { Fragment } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';

import GlobalStyle from './utils/styles/global';

import store from './store';

export default () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </Fragment>
  </Provider>
);
