import React from "react";
import { image } from "../data/data";

function About() {
  return
   <div id="about">
    About
    <h1 style={{ color: "firebrick" }}>
    {('{name} is a Web Developer from {city}')}
    </h1>
    <h2>About Me</h2>
    <p>Some content of my choosing.</p>
    <img src={image} alt="I made this" />
    </div>;
}

export default About;
