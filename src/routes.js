import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {AddTodoContainer, TodoContainer} from './containers';
import {Layout, Welcome, About, Options} from './components';

// Use hashHistory for easier development
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Welcome}/>
      <Route path="/about" component={About}/>
      <Route path="/options" component={Options}/>
    </Route>
    <Route path="/todo" component={Layout}>
      <IndexRoute component={TodoContainer}/>
      <Route path="/todo-form" component={AddTodoContainer}/>
    </Route>
  </Router>
);

export default routes;
