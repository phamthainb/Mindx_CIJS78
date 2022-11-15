/* eslint-disable jsx-a11y/anchor-is-valid */


import React from "react";

export default function HomePage() {
  return (
    <div className="App">
      {/* <!-- START NAV --> */}

      <nav id="navbar">
        <ul className="nav">
          <li className="logo">
            <a href="#logo">mindX School</a>
          </li>
          <li className="item">
            <a href="#welcome-section">About</a>
          </li>
          <li className="item">
            <a href="#projects">Project</a>
          </li>
          <li className="item">
            <a href="#contact">Contact</a>
          </li>
          <li className="item button">
            <a href="#">Log In</a>
          </li>
          <li className="item button secondary">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>

      {/* <!-- END NAV --> */}

      {/* <!-- START PROJECTS SECTION --> */}

      <section id="projects" className="projects-section">
        <h2 className="projects-section-header">
          These are some of my projects
        </h2>

        <div className="projects-grid">
          <a
            href="#welcome-section"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-02.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Sample 1<span className="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-10.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Sample 2<span className="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-11%20.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Sample 3<span className="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-08.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Sample 4<span className="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-13%20.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Sample 5<span className="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-12.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Sample 6<span className="code">&#47;&gt;</span>
            </p>
          </a>
        </div>

        <a href="#welcome-section" className="btn btn-show-all" target="_blank">
          Show all<i className="fas fa-chevron-right"></i>
        </a>
      </section>

      {/* <!-- END PROJECTS SECTION --> */}

      {/* <!-- START CONTACT SECTION --> */}

      <section id="contact" className="contact-section">
        <div className="contact-section-header">
          <h2>Let's work together...</h2>
          <p>How do you take your coffee?</p>
        </div>
        <div className="contact-links">
          <a
            href="#welcome-section"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
          <a
            id="profile-link"
            href="#welcome-section"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="#welcome-section" className="btn contact-details">
            <i className="fas fa-at"></i> Send a mail
          </a>
          <a href="#welcome-section" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </section>

      {/* <!-- END CONTACT SECTION --> */}

      {/* <!-- START FOOTER SECTION --> */}

      <footer>
        <p>
          **This is just a fake portfolio. All the projects and contact details
          given are not real.
        </p>
        <p>
          &copy; Created for
          <a href="#welcome-section" target="_blank">
            mindX Technology School
          </a>
        </p>
      </footer>
    </div>
  );
}
