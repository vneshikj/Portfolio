import "../App.css";
import React from "react";
import portrait from "../resources/portrait.jpg";

function AboutMe() {
  return (
    <div className="about-me" id="about-me-section">
      <div className="about-me-image-text-div">
        <div>
          <h1 className="name"> Viktor Neshikj </h1>

          <h2 className="title"> Computer Systems Engineering Student</h2>

          <div className="about-me-intro">
            <p>Greetings and welcome,</p>

            <p>
              I’m Viktor, an aspiring computer engineer wanting to improve the
              lives of people around the world. I’m deeply passionate about
              hardware and software development, striving for the absolute best
              with each task at hand. Throughout my study at the University of
              Auckland, I have completed numerous projects, which can be viewed
              below. Above all, what is most important to me is bringing joy to
              my colleagues and end-users through my work.
            </p>
          </div>
        </div>

        <img src={portrait} decoding="async" className="portrait"></img>
      </div>
    </div>
  );
}

export default AboutMe;
