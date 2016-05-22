import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import App from './routes/App.js'
import Index from './routes/Index.js'
import About from './routes/About.js'
import Users from './routes/Users.js'
import User from './routes/User.js'
import UsersIndex from './routes/UsersIndex.js'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="users" component={Users}>
        <IndexRoute component={UsersIndex}/>
        <Route path=":id" component={User}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'))
