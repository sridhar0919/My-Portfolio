import React, { useEffect, useState } from 'react';
import './css/Navbar.css';

export default function Navbar() {
  const [isActive, setActive] = useState('false');

  return (
    <div className="home-content">
      <nav className="nav-top">
        <div className="logo-content">
          <div>
            <a
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              className="logo-top"
            >
              S
            </a>
          </div>
          <div>
            <a
              href="#"
              className="toggle-button"
              onClick={() => {
                setActive(!isActive);
              }}
            >
              <i class="fa-solid fa-2x fa-bars"></i>
            </a>
          </div>
        </div>
        <div className={isActive ? 'navbar-links1 active' : 'navbar-links1'}>
          <ul className="nav-heading1">
            <li
              onClick={() => {
                window.scrollTo({
                  top: 600,
                  behavior: 'smooth',
                });
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                window.scrollTo({
                  top: 1700,
                  behavior: 'smooth',
                });
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                window.scrollTo({
                  top: 5700,
                  behavior: 'smooth',
                });
              }}
            >
              Contact
            </li>
            <li className="last-li">
              <a
                href="https://drive.google.com/file/d/1w0TL5lzXQLOVizWRYJbcXyAxo1yF85Q4/view?usp=sharing"
                target="_blank"
                className="resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-links">
          <ul className="nav-heading">
            <li
              onClick={() => {
                window.scrollTo({
                  top: 600,
                  behavior: 'smooth',
                });
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                window.scrollTo({
                  top: 1300,
                  behavior: 'smooth',
                });
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                window.scrollTo({
                  top: 4000,
                  behavior: 'smooth',
                });
              }}
            >
              Contact
            </li>
            <li className="last-li">
              <a
                href="https://drive.google.com/file/d/1w0TL5lzXQLOVizWRYJbcXyAxo1yF85Q4/view?usp=sharing"
                target="_blank"
                className="resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={
          isActive ? 'intro-content ham-act' : 'intro-content ham-inact'
        }
      >
        <h3>Hello, my name is</h3>
        <p className="intro-name1">Sridharan Thiagarajan.</p>
        <p className="intro-name">I love exploring new things!</p>
        <p className="intro-about-one">
          I'm an aspiring developer currently working as a System Analyst
        </p>
        <p className="intro-about">
          at Cognizant, Chennai. Primarily interested in Web Development.
        </p>
        <p className="intro-about-two">
          I enjoy learning new skills and implementing them in real life!
        </p>
      </div>
    </div>
  );
}
