import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import '../global.css';

const ACTIVE = { color: 'red' }

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>APP!!!</h1>
        <ul>
          <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
          <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

          <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
          <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

          <li><Link      to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
          <li><Link      to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
                                          activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>

          <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}
