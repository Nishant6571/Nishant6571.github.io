import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import resume from "../Resume/Nishant_Bhargava_Resume.pdf";

// About
export const About = () => {
  return (
    <>
      <div class="nav-link home" id="home" className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am{" "}
          <span className="about__name" id="user-detail-name">
            Nishant Bhargava
          </span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Web Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/nishant6571"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:nishantbhargava.bhargava@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918285743459"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-bh"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <a href={resume} download>
          <button
            id="resume-button-2"
            class="nav-link resume"
            className="btnResume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1CPyB7MP37apd5HYvrEFcMMQKB_kyaboN/view?usp=sharing"
              );
            }}
          >
            Resume
          </button>
        </a>
      </div>

      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
