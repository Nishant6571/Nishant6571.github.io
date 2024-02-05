import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/nishant.JPG";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section class="nav-link about" id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img class="home-img" src={profilePic} alt="Images" />
            </div>
            <div id="user-detail-intro" className="introduction_datacontainer">
              <h4>
                A dedicated Full-Stack Web Developer with a passion for crafting
                seamless and visually appealing user experiences. I pay close
                attention to details, making sure the websites I build are both
                strong and user-friendly. I'm eager to stay updated with the
                latest in technology to bring fresh ideas and top-notch quality
                to every project.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>

              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Foodie{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveller{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
