import React from 'react'

function SslFaq() {
  return (
    <div className="faq-one gray-bg ssl-certificate-page-faq">
    <div className="container">
      <div className="faq-one__top text-center">
        <h3 className="faq-one__top__title">
          Frequently asked questions
        </h3>
        {/* /.faq-one__top__title */}
        <p className="faq-one__top__text">
          The distracted by the readable content of a page when looking at
          its layout
        </p>
        {/* /.faq-one__top__text */}
      </div>
      {/* /.faq-one__top */}
      <div className="text-center">
        <ul
          className="nav nav-tabs faq-one__tab__btns"
          id="faq-one-tab"
          role="tablist"
        >
          <li role="presentation" className="nav-item ">
            <button
              className="nav-link active"
              id="faq-one-01-tab"
              data-bs-toggle="tab"
              data-bs-target="#faq-one-01"
              type="button"
              role="tab"
              aria-selected="true"
            >
              <span>General Enquery</span>
            </button>
          </li>
          <li role="presentation" className="nav-item">
            <button
              className="nav-link"
              id="faq-one-02-tab"
              data-bs-toggle="tab"
              data-bs-target="#faq-one-02"
              role="tab"
              type="button"
              aria-selected="true"
            >
              <span>Shared Hosting</span>
            </button>
          </li>
          <li role="presentation" className="nav-item">
            <button
              className="nav-link"
              id="faq-one-03-tab"
              data-bs-toggle="tab"
              data-bs-target="#faq-one-03"
              role="tab"
              type="button"
              aria-selected="true"
            >
              <span>VPS Hosting</span>
            </button>
          </li>
        </ul>
        {/* /.nav nav-tabs faq-one__tab__btns */}
      </div>
      {/* /.text-center */}
      <div className="tab-content" id="faq-one-tab-content">
        <div
          className="tab-pane fade show active animated fadeInUp"
          id="faq-one-01"
          role="tabpanel"
          aria-labelledby="faq-one-01-tab"
        >
          <div
            className="accordion faq-one__accordion"
            id="faq-one__accordion-1"
          >
            <div className="accordion-item faq-one__accordion__item accordion--active">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-1__heading-1"
              >
                <button
                  className="accordion-button faq-one__accordion__button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-1__collapse-1"
                  aria-expanded="true"
                  aria-controls="faq-one__accordion-1__collapse-1"
                >
                  What is WordPress Hosting?
                  <span className="faq-one__accordion__icon" />
                  {/* /.faq-one__accordion__icon */}
                </button>
              </h2>
              <div
                id="faq-one__accordion-1__collapse-1"
                className="accordion-collapse collapse show faq-one__accordion__collapse"
                aria-labelledby="faq-one__accordion-1__heading-1"
                data-bs-parent="#faq-one__accordion-1"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item ">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-1__heading-2"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-1__collapse-2"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-1__collapse-2"
                >
                  Why is domain name registration required?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-1__collapse-2"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-1__heading-2"
                data-bs-parent="#faq-one__accordion-1"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-1__heading-3"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-1__collapse-3"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-1__collapse-3"
                >
                  How does domain registration work?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-1__collapse-3"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-1__heading-3"
                data-bs-parent="#faq-one__accordion-1"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-1__heading-4"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-1__collapse-4"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-1__collapse-4"
                >
                  What’s the best way to find a cheap domain?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-1__collapse-4"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-1__heading-4"
                data-bs-parent="#faq-one__accordion-1"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-1__heading-5"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-1__collapse-5"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-1__collapse-5"
                >
                  How do I choose the right domain registrar?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-1__collapse-5"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-1__heading-5"
                data-bs-parent="#faq-one__accordion-1"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-1__heading-6"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-1__collapse-6"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-1__collapse-6"
                >
                  How does domain registration work?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-1__collapse-6"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-1__heading-6"
                data-bs-parent="#faq-one__accordion-1"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.tab-pane */}
        <div
          className="tab-pane fade animated fadeInUp"
          id="faq-one-02"
          role="tabpanel"
          aria-labelledby="faq-one-02-tab"
        >
          <div
            className="accordion faq-one__accordion"
            id="faq-one__accordion-2"
          >
            <div className="accordion-item faq-one__accordion__item accordion--active">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-2__heading-1"
              >
                <button
                  className="accordion-button faq-one__accordion__button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-2__collapse-1"
                  aria-expanded="true"
                  aria-controls="faq-one__accordion-2__collapse-1"
                >
                  What is WordPress Hosting?
                  <span className="faq-one__accordion__icon" />
                  {/* /.faq-one__accordion__icon */}
                </button>
              </h2>
              <div
                id="faq-one__accordion-2__collapse-1"
                className="accordion-collapse collapse show faq-one__accordion__collapse"
                aria-labelledby="faq-one__accordion-2__heading-1"
                data-bs-parent="#faq-one__accordion-2"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item ">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-2__heading-2"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-2__collapse-2"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-2__collapse-2"
                >
                  Why is domain name registration required?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-2__collapse-2"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-2__heading-2"
                data-bs-parent="#faq-one__accordion-2"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-2__heading-3"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-2__collapse-3"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-2__collapse-3"
                >
                  How does domain registration work?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-2__collapse-3"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-2__heading-3"
                data-bs-parent="#faq-one__accordion-2"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-2__heading-4"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-2__collapse-4"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-2__collapse-4"
                >
                  What’s the best way to find a cheap domain?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-2__collapse-4"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-2__heading-4"
                data-bs-parent="#faq-one__accordion-2"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-2__heading-5"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-2__collapse-5"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-2__collapse-5"
                >
                  How do I choose the right domain registrar?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-2__collapse-5"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-2__heading-5"
                data-bs-parent="#faq-one__accordion-2"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-2__heading-6"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-2__collapse-6"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-2__collapse-6"
                >
                  How does domain registration work?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-2__collapse-6"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-2__heading-6"
                data-bs-parent="#faq-one__accordion-2"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.tab-pane */}
        <div
          className="tab-pane fade animated fadeInUp"
          id="faq-one-03"
          role="tabpanel"
          aria-labelledby="faq-one-03-tab"
        >
          <div
            className="accordion faq-one__accordion"
            id="faq-one__accordion-3"
          >
            <div className="accordion-item faq-one__accordion__item accordion--active">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-3__heading-1"
              >
                <button
                  className="accordion-button faq-one__accordion__button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-3__collapse-1"
                  aria-expanded="true"
                  aria-controls="faq-one__accordion-3__collapse-1"
                >
                  What is WordPress Hosting?
                  <span className="faq-one__accordion__icon" />
                  {/* /.faq-one__accordion__icon */}
                </button>
              </h2>
              <div
                id="faq-one__accordion-3__collapse-1"
                className="accordion-collapse collapse show faq-one__accordion__collapse"
                aria-labelledby="faq-one__accordion-3__heading-1"
                data-bs-parent="#faq-one__accordion-3"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item ">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-3__heading-2"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-3__collapse-2"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-3__collapse-2"
                >
                  Why is domain name registration required?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-3__collapse-2"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-3__heading-2"
                data-bs-parent="#faq-one__accordion-3"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-3__heading-3"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-3__collapse-3"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-3__collapse-3"
                >
                  How does domain registration work?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-3__collapse-3"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-3__heading-3"
                data-bs-parent="#faq-one__accordion-3"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-3__heading-4"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-3__collapse-4"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-3__collapse-4"
                >
                  What’s the best way to find a cheap domain?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-3__collapse-4"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-3__heading-4"
                data-bs-parent="#faq-one__accordion-3"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-3__heading-5"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-3__collapse-5"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-3__collapse-5"
                >
                  How do I choose the right domain registrar?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-3__collapse-5"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-3__heading-5"
                data-bs-parent="#faq-one__accordion-3"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
            <div className="accordion-item faq-one__accordion__item">
              <h2
                className="accordion-header faq-one__accordion__header"
                id="faq-one__accordion-3__heading-6"
              >
                <button
                  className="accordion-button faq-one__accordion__button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-one__accordion-3__collapse-6"
                  aria-expanded="false"
                  aria-controls="faq-one__accordion-3__collapse-6"
                >
                  How does domain registration work?
                  <span className="faq-one__accordion__icon" />
                </button>
              </h2>
              <div
                id="faq-one__accordion-3__collapse-6"
                className="accordion-collapse faq-one__accordion__collapse collapse"
                aria-labelledby="faq-one__accordion-3__heading-6"
                data-bs-parent="#faq-one__accordion-3"
              >
                <div className="accordion-body faq-one__accordion__body">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages
                  and web page editors.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.tab-pane */}
      </div>
      {/* /.tab-content */}
      <div className="faq-one__bottom text-center">
        Can't find an answer to your question?
        <a href="contact.html">
          <span>Submit request</span> <i className="icon-arrow" />
        </a>
      </div>
      {/* /.faq-one__bottom */}
    </div>
    {/* /.container */}
  </div>
  )
}

export default SslFaq
