import React from 'react'

function PageBanner() {
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
          <span>Login</span>
        </li>
      </ul>
      {/* /.thm-breadcrumb list-unstyled */}
      <h2 className="page-banner-two__title">Login</h2>
      {/* /.page-banner-two__title */}
    </div>
    {/* /.container */}
  </div>
  )
}

export default PageBanner
