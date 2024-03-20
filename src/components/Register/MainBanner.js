import React from 'react'

function MainBanner() {
  return (
    <div className="page-banner-two page-banner-two--has-bottom-padding">
    <div className="container">
      <ul className="thm-breadcrumb list-unstyled">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <span>Register</span>
        </li>
      </ul>
      {/* /.thm-breadcrumb list-unstyled */}
      <h2 className="page-banner-two__title">Register</h2>
      {/* /.page-banner-two__title */}
    </div>
    {/* /.container */}
  </div>
  )
}

export default MainBanner
