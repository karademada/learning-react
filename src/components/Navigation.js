import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <div>
    <ul>
      <li><Link to="/">Menu</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/sample">Sample</Link></li>
    </ul>
  </div>
);

export default Navigation;
