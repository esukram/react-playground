import * as React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/foo">Foo</Link></li>
          <li><NavLink to="/bar">Bar</NavLink></li>
        </ul>
      </nav>
    );
};

export default Nav;