import React from 'react';
import ReactDOM from 'react-dom';

export default class User extends React.Component {
  render() {
    return (
      <div>
        <h3>User {this.props.params.id}</h3>
      </div>
    )
  }
}
