import React from 'react';
import './css/About.css';

export default function About() {
  return (
    <div className="total-content">
      <h3 className="title111">About Me</h3>
      <div class="main-content">
        <div className="about-content">
          <p>Hello! I am Sridharan Thiagarajan, from Chennai.</p>
          <p>
            I have completed my Bachelors from Velammal Institute Of Technology,
            Chennai in Electrical and Electronics Engineering (2014-2018).
          </p>
          <p>
            I am passionate about everything that has to do with technology and
            science. I work on different web projects in my free time in order
            to learn new tools and languages.
          </p>
          <p>
            I have good problem solving ability and I am a dedicated,
            goal-oriented individual with a team spirit.
          </p>
        </div>
        <div className="about-content1 content1">
          <h3>My Skills</h3>
          <div className="skills">
            <div className="skills-skill">React JS</div>
            <div className="skills-skill">Express</div>
            <div className="skills-skill">Node JS</div>
            <div className="skills-skill">HTML</div>
            <div className="skills-skill">CSS</div>
            <div className="skills-skill">Javascript</div>
            <div className="skills-skill">Bootstrap</div>
            <div className="skills-skill">MySQL</div>
            <div className="skills-skill">MongoDB</div>
          </div>
        </div>
      </div>
    </div>
  );
}
