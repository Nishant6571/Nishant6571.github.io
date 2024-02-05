import React from "react";

export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  // const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          marginTop: "40px",
          height: "800px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
        id="calendar"
      >
        <h2
          style={{
            color: "#ccbf43",
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
          className="title calci "
        >
          Github Calendar
        </h2>
        <div
          class="react-activity-calendar"
          className="react-activity-calendar calendar"
          style={{
            marginTop: "40px",
            height: "250px",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            id="github-calendar-responsive"
            style={{
              marginTop: "40px",
              width: "90%",
              height: "200px",
              paddingTop: "25px",
            }}
            src="https://ghchart.rshah.org/Nishant6571"
            alt="err"
          />
        </div>

        <div
          style={{
            width: "100%",
          }}
          id="statebox"
        >
          <div
            style={{
              width: "100%",
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
              gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
            }}
            id="gitStats"
          >
            <img
              id="github-streak-stats"
              style={{ width: "80%", height: "200px", margin: "0 auto" }}
              src="https://github-readme-streak-stats.herokuapp.com/?user=nishant6571&"
              alt="nishant6571"
            />
            <img
              id="github-top-langs"
              style={{ width: "80%", height: "150px", margin: "20px auto" }}
              src="https://github-readme-stats.vercel.app/api/top-langs?username=nishant6571&show_icons=true&locale=en&layout=compact"
              alt="nishant6571"
            />
            <img
              id="github-stats-card"
              style={{ width: "80%", height: "200px", margin: "0 auto" }}
              src="https://github-readme-stats.vercel.app/api?username=nishant6571&show_icons=true&locale=en"
              alt="nishant6571"
            />
          </div>
        </div>
      </div>
    </>
  );
};
