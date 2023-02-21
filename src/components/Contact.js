import React from 'react';
import './css/Contact.css';

export default function Contact() {
  return (
    <div className="total-content2">
      <h3>What's Next ?</h3>
      <h4>Get In Touch</h4>
      <div className="para-content2">
        <p>
          My inbox is always open. Whether you have a question or just want to
          say hello, I'll try my best to get back to you! Feel free to mail me
          about any relevant job updates.
        </p>
      </div>
      <div className="contact-link">
        <button>
          <a
            href="mailto:sridhar9797@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="contact-link"
          >
            Mail Me
          </a>
        </button>
        <ul className="icons-contact">
          <li>
            <a href="https://github.com/sridhar0919" target="_blank">
              <i class="fa-brands fa-2x fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <i class="fa-brands fa-2x fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sridhar_0919" target="_blank">
              <i class="fa-brands fa-2x fa-instagram"></i>
            </a>
          </li>
        </ul>
        <p className="footer-copy">&#169; Sridharan Thiagarajan 2023</p>
      </div>
    </div>
  );
}
