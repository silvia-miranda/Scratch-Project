import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/register'>REGISTER</Link>
          </li>
          <li>
            <Link to='/search'>SEARCH</Link>
          </li>
          <li>
            <Link to='/login '>LOGIN</Link>
          </li>
          <li>
            <Link to='/Profile'>PROFILE</Link>
          </li>
          <li>
        </ul>
      </div>
    );
  }
}
