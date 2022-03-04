import React from 'react';
import './css/Projects.css';
import projectImg1 from '../images/movie-ticket.png';
import projectImg2 from '../images/food-delivery.png';
import projectImg3 from '../images/url-shortener.png';

export default function Projects() {
  return (
    <div className="total-content">
      <h3 className="title">Some things I've Built</h3>
      <div className="first-project">
        <div>
          <p className="sub-heading">Featured Project</p>
          <a href="https://bookshoww.netlify.app/" target="_blank">
            <p className="title-name">Movie Ticket Booking</p>
          </a>
          <p className="content-project">
            Built Movie Ticket Application with React JS and Express JS. Styled
            with 5 movies for booking; clickable images to get details of the
            specific movie. Also with a seat selection page, where you can
            select your seats.
          </p>
          <ul className="tools-project">
            <li>React JS</li>
            <li>Express JS</li>
            <li>Bootstrap</li>
            <li>MongoDB</li>
          </ul>
          <div className="links-project">
            <a
              href="https://github.com/sridhar0919/movie-ticket-booking-appl/tree/main"
              target="_blank"
            >
              <i class="fa-brands fa-2x fa-github"></i>
            </a>
            <a href="https://bookshoww.netlify.app/" target="_blank">
              <i class="fa-solid fa-2x fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className="screen-div">
          <a
            className="screenshots"
            href="https://bookshoww.netlify.app/"
            target="_blank"
          >
            <img src={projectImg1}></img>
          </a>
        </div>
      </div>
      <div className="first-project project11">
        <div>
          <p className="sub-heading">Featured Project</p>
          <a href="https://yummyy.netlify.app/" target="_blank">
            <p className="title-name">Food Delivery</p>
          </a>
          <p className="content-project">
            Built Food Delivery Application with React JS and Express JS. Styled
            with menus from different cuisines to order. Also designed a
            checkout page with the order summary and a contact page for
            feedback.
          </p>
          <ul className="tools-project">
            <li>React JS</li>
            <li>Express JS</li>
            <li>Bootstrap</li>
            <li>MongoDB</li>
          </ul>
          <div className="links-project">
            <a
              href="https://github.com/sridhar0919/food-deliveryapp"
              target="_blank"
            >
              <i class="fa-brands fa-2x fa-github"></i>
            </a>
            <a href="https://yummyy.netlify.app/" target="_blank">
              <i class="fa-solid fa-2x fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className="screen-div">
          <a
            className="screenshots"
            href="https://yummyy.netlify.app/"
            target="_blank"
          >
            <img src={projectImg2}></img>
          </a>
        </div>
      </div>
      <div className="first-project project11">
        <div>
          <p className="sub-heading">Featured Project</p>
          <a href="https://urlshortener11.netlify.app/" target="_blank">
            <p className="title-name">URL Shortener</p>
          </a>
          <p className="content-project">
            Built URL Shortener application with React JS and Express JS.
            Designed it with login and password reset page using Nodemailer.
            BcryptJS was used to shorten the URL.
          </p>
          <ul className="tools-project">
            <li>React JS</li>
            <li>Express JS</li>
            <li>Nodemailer</li>
            <li>MongoDB</li>
          </ul>
          <div className="links-project">
            <a
              href="https://github.com/sridhar0919/url-shortener/tree/main/src"
              target="_blank"
            >
              <i class="fa-brands fa-2x fa-github"></i>
            </a>
            <a href="https://urlshortener11.netlify.app/" target="_blank">
              <i class="fa-solid fa-2x fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className="screen-div">
          <a
            className="screenshots"
            href="https://urlshortener11.netlify.app/"
            target="_blank"
          >
            <img src={projectImg3}></img>
          </a>
        </div>
      </div>
    </div>
  );
}
