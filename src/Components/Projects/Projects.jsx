import React from "react";
import "./Projects.css";

import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNetlify,
  SiRedux,
  SiChakraui,
  SiHeroku,
  SiCss3,
  SiVercel,
} from "react-icons/si";
import travelImage1 from "../../assets/travel1.png";
import travelImage2 from "../../assets/travel2.png";
import travelImage3 from "../../assets/travel3.png";
import travelImage4 from "../../assets/travel4.png";
import travelImage5 from "../../assets/travel5.png";
import travelImage6 from "../../assets/travel6.png";
import travelImage7 from "../../assets/travel7.png";
import travelImage8 from "../../assets/travel8.png";
import travelImage9 from "../../assets/travel9.png";
import hospital1 from "../../assets/hospital1.png";
import hospital2 from "../../assets/hospital2.png";
import hospital3 from "../../assets/hospital3.png";
import hospital4 from "../../assets/hospital4.png";
import hospital5 from "../../assets/hospital5.png";
import hospital6 from "../../assets/hospital6.png";
import hospital7 from "../../assets/hospital7.png";
import byte1 from "../../assets/byte1.png";
import byte2 from "../../assets/byte2.png";
import byte3 from "../../assets/byte3.png";
import byte4 from "../../assets/byte4.png";
import byte6 from "../../assets/byte6.png";
import byte7 from "../../assets/byte7.png";
import finance1 from "../../assets/finance1.png";
import finance2 from "../../assets/finance2.png";
import finance3 from "../../assets/finance3.png";
import finance4 from "../../assets/finance4.png";
import finance5 from "../../assets/finance5.png";
import finance6 from "../../assets/finance6.png";
import finance7 from "../../assets/finance7.png";

import projectfigma from "../../assets/projectfigma.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Projects = () => {
  return (
    <>
      <div
        style={{ marginTop: "40px" }}
        class="nav-link projects"
        id="projects"
        className="Projectsection"
      >
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div
            class="project-card"
            className="projects_container"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <Carousel
                    className="project_videocontainer"
                    autoPlay={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                  >
                    <div>
                      <img src={hospital1} />
                    </div>
                    <div>
                      <img src={hospital2} />
                    </div>
                    <div>
                      <img src={hospital3} />
                    </div>
                    <div>
                      <img src={hospital4} />
                    </div>
                    <div>
                      <img src={hospital5} />
                    </div>
                    <div>
                      <img src={hospital6} />
                    </div>
                    <div>
                      <img src={hospital7} />
                    </div>
                  </Carousel>
                </div>
              </div>

              <div className="project_information">
                <h2 class="project-title">Samrat Hospital</h2>

                <p class="project-description">
                  Samrat Hospital is an online portal, facilitating the seamless
                  booking of appointments with our esteemed doctors. This
                  digital platform reflects our commitment to providing
                  accessible and modern healthcare solutions, ensuring a
                  convenient experience for our valued patients.
                </p>

                <div class="project-tech-stack" className="tec">
                  <FaReact />
                  <SiRedux />
                  <SiTailwindcss />
                  <SiChakraui />
                  <SiVercel />
                </div>
                <br />

                <div>
                  <a
                    class="project-deployed-link"
                    href="https://c-sharp-sam.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/Nishant6571/Samrat_Hospital"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="project-card"
            className="projects_container"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <Carousel
                    className="project_videocontainer"
                    autoPlay={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                  >
                    <div>
                      <img src={byte1} />
                    </div>
                    <div>
                      <img src={byte2} />
                    </div>
                    <div>
                      <img src={byte3} />
                    </div>
                    <div>
                      <img src={byte4} />
                    </div>

                    <div>
                      <img src={byte6} />
                    </div>
                    <div>
                      <img src={byte7} />
                    </div>
                  </Carousel>
                </div>
              </div>

              <div className="project_information">
                <h2 class="project-title">Byte Blitz</h2>

                <p class="project-description">
                  ByteBlitz is a open-source quiz application that helps you to
                  learn various programming languages related questions. Here we
                  are providing well organised quizzes right in the browser.
                </p>

                <div class="project-tech-stack" className="tec">
                  <FaReact />
                  <SiRedux />
                  <SiTailwindcss />
                  <SiChakraui />
                  <SiVercel />
                  <FaNodeJs />
                </div>
                <br />

                <div>
                  <a
                    class="project-deployed-link"
                    href="https://byte-blitz-five.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/Nishant6571/Byte-Blitz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="project-card"
            className="projects_container"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <Carousel
                    className="project_videocontainer"
                    autoPlay={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                  >
                    <div>
                      <img src={finance7} />
                    </div>
                    <div>
                      <img src={finance1} />
                    </div>
                    <div>
                      <img src={finance2} />
                    </div>
                    <div>
                      <img src={finance3} />
                    </div>
                    <div>
                      <img src={finance4} />
                    </div>

                    <div>
                      <img src={finance5} />
                    </div>
                    <div>
                      <img src={finance6} />
                    </div>
                  </Carousel>
                </div>
              </div>

              <div className="project_information">
                <h2 class="project-title">Finance GPT</h2>

                <p class="project-description">
                  FinanceGPT is a powerful financial information tool designed
                  to empower users with real-time stock data, curated articles,
                  and AI-driven assistance for financial queries. This project
                  addresses the need for a comprehensive platform that helps in
                  various facets of financial information, catering to both
                  novice and experienced users in the finance.
                </p>

                <div class="project-tech-stack" className="tec">
                  <FaReact />
                  <SiTailwindcss />
                  <SiMaterialui />
                  <SiVercel />
                </div>
                <br />

                <div>
                  <a
                    class="project-deployed-link"
                    href="https://finance-gpt-omega.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/Nishant6571/Finance_gpt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="project-card"
            className="projects_container"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <Carousel
                    className="project_videocontainer"
                    autoPlay={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                  >
                    <div>
                      <img src={travelImage1} />
                    </div>

                    <div>
                      <img src={travelImage2} />
                    </div>

                    <div>
                      <img src={travelImage3} />
                    </div>

                    <div>
                      <img src={travelImage9} />
                    </div>

                    <div>
                      <img src={travelImage4} />
                    </div>

                    <div>
                      <img src={travelImage6} />
                    </div>

                    <div>
                      <img src={travelImage5} />
                    </div>
                    <div>
                      <img src={travelImage7} />
                    </div>
                    <div>
                      <img src={travelImage8} />
                    </div>
                  </Carousel>
                </div>
              </div>

              <div className="project_information">
                <h2 class="project-title">Travel Tribe</h2>
                <p class="project-description">
                  Travel Tribe is an online travel agency that specializes in
                  offering comprehensive travel packages, ensuring a seamless
                  end-to-end experience for travelers. Whether you're dreaming
                  of exotic destinations, cultural adventures, or relaxing
                  getaways, our platform is designed to provide all-encompassing
                  solutions.
                </p>

                <div class="project-tech-stack" className="tec">
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                  <SiNetlify />
                </div>

                <div>
                  <a
                    class="project-deployed-link"
                    href="https://velvety-maamoul-e37b50.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/Nishant6571/Travel-Tribe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={projectfigma} alt="Figma_Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Figma Template Clone</h2>
                <p class="project-description">
                  Our project involves replicating the design elements from
                  Figma, specifically for the Portfolio Detail and Contact
                  sections.Clone that faithfully represents the visual and
                  interactive aspects of the original design. This includes
                  ensuring a seamless user experience in our implementation.
                </p>
                <div class="project-tech-stack" className="tec">
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div>
                  <a
                    class="project-deployed-link"
                    href="https://cw-unit3-project.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/Nishant6571/Figma_Template_Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
