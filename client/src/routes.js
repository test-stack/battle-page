import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { AddFormContainer, ListContainer } from './containers';
import { Home, Welcome, About, Options, Form} from './components';

// Use hashHistory for easier development
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Welcome} />
      <Route path="/about" component={About} />
      <Route path="/options" component={Options} />
    </Route>
    <Route path="/list" component={Home}>
      <IndexRoute component={ListContainer} />
      <Route path="/form" component={AddFormContainer} />
    </Route>
  </Router>
);

export default routes;
