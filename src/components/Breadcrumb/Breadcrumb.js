import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb() {
  return (
    <div className="page-banner-two">
    <div className="container">
      <ul className="thm-breadcrumb list-unstyled">
        <li>
          <Link to="/index">Home</Link>
        </li>
        <li>
          <span>About us</span>
        </li>
      </ul>
      {/* /.thm-breadcrumb list-unstyled */}
      <h2 className="page-banner-two__title">About us</h2>
      {/* /.page-banner-two__title */}
    </div>
    {/* /.container */}
  </div>
  )
}

export default Breadcrumb
