import "../App.css";
import React from "react";

function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="name"> Viktor Neshikj </h1>

      <h2 className="title"> Computer Systems Engineering Student</h2>

      <div className="about-me-intro">
        <p>Hi there! </p>

        <p>
          I’m Viktor, an aspiring computer engineer wanting to improve the lives
          of people around the world. I’m deeply passionate about hardware and
          software development, striving for the absolute best with each task at
          hand. Throughout my study at the University of Auckland, I have
          completed numerous projects, including an energy monitor, a sign
          language interpreter, and an Android application for viewing watches.
          Above all, what is most important to me is bringing joy to my
          colleagues and end-users through my work.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
