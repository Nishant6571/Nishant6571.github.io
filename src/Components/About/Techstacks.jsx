import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaAngular } from "react-icons/fa";
import { SiRedux, SiHtml5, SiExpress, SiGit } from "react-icons/si";
import { DiCss3, DiMongodb, DiMysql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export const Techstacks = () => {
  return (
    <>
      <div
        class="nav-link skills"
        id="skills"
        className="tecsection main"
        data-aos="fade-right"
      >
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div class="skills-card">
            <SiJavascript />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">Javascript</h5>
          </div>
          <div class="skills-card">
            <FaReact />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">React</h5>
          </div>

          <div class="skills-card">
            <SiHtml5 />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">HTML</h5>
          </div>
          <div class="skills-card">
            <DiCss3 />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">CSS</h5>
          </div>

          <div class="skills-card">
            <FaNodeJs />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">Nodejs</h5>
          </div>
          <div class="skills-card">
            <DiMongodb />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">MongoDb</h5>
          </div>
          <div class="skills-card">
            <DiMysql />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">Mysql</h5>
          </div>

          <div class="skills-card">
            <SiExpress />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">Express</h5>
          </div>

          <div class="skills-card">
            <VscGithub />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">Github</h5>
          </div>
          <div class="skills-card">
            <SiRedux />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">Redux</h5>
          </div>

          <div class="skills-card">
            <SiGit />
            <img class="skills-card-img" src="" alt="" />
            <h5 class="skills-card-name">Git</h5>
          </div>
        </div>
      </div>
    </>
  );
};
