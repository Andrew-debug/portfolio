import React from "react";
import styled from "styled-components";

const experience = [
  {
    date: "2023 - Present",
    city: "Kyiv",
    position: "React Developer",
    company: "Freelance",
    responsibilities:
      "Deploying a website from A to Z. Building responsive websites using Figma templates or creating custom designs. Collaborating effectively with other developers to implement complex functionality based onclient specifications. Proactively communicating with clients to gain a deeper understanding of their needs and deliver optimal solutions.",
  },
  {
    date: "2021 - 2023",
    city: "Kyiv",
    position: "Front-end developer",
    company: "Studying",
    responsibilities:
      "Intensive self-directed study and successful completion of diverse pet projects. Finished JavaScript course: 'The Complete JavaScript Course: From Zero to Expert!'. Started learning React after few month since the beginning. Become skilled in using Git for version control. Proficient with command line interfaces for efficient development workflows. Intensive self-directed study of HTML/CSS, JavaScript and third-party libraries. Became proficient in HTML5, CSS3, Sass/Scss, JavaScript (ES6), and responsive design.",
  },
];

const Work = styled.div`
  h3 {
    padding: 20px 0 20px;
    margin: 0px;
    font: 600 1.8em / 1.2 "Raleway", sans-serif;
    color: rgb(255, 255, 255);
    padding: 20px 15px 20px 0;
    @media (max-width: 768px) {
      font-size: 1.6em;
    }
  }
`;

const WorkList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  position: relative;
`;

const WorkListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-left: -8px;
  margin-right: -8px;
  span {
    flex: 0 0 240px;
    margin: 2px 10px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const WorkDate = styled.span`
  text-align: right;
  font-size: 12px;
  display: block;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease 0s;
`;
const WorkCity = styled.span`
  text-align: right;
  font-weight: 400;
  padding-top: 5px;
  font-size: 14px;
  display: block;
  color: rgb(255, 255, 255);
`;

const Responsibilities = styled.div`
  padding-left: 15px;
  h2 {
    margin: 0px;
    font: 600 1.33em / 1.2 "Raleway", sans-serif;
    color: rgb(255, 255, 255);
    @media (max-width: 768px) {
      font-size: 1.15em;
    }
  }
  p {
    padding: 20px 0 40px;
    font: 300 0.875em / 1.6 "Raleway", sans-serif;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Separator = styled.div`
  position: absolute;
  top: 7px;
  left: 50%;
  bottom: -5px;
  width: 1px;
  transform: translateX(-0.5px);
  background: rgba(255, 255, 255, 0.2);
`;

function WorkPlaceComponent() {
  return (
    <Work>
      <h3>Work Experience</h3>
      <WorkList>
        {experience.map((item, index) => {
          return (
            <WorkListItem key={index}>
              <span>
                <WorkDate>{item.date}</WorkDate>
                <WorkCity>{item.city}</WorkCity>
              </span>
              <div style={{ position: "relative", marginTop: 10 }}>
                <div
                  style={{
                    marginTop: index === 0 ? "-7px" : "-5px",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background:
                      index === 0 ? "rgb(226, 120, 108)" : "rgb(255, 255, 255)",
                    transform: index === 0 ? "scale(1.4)" : "scale(1)",
                  }}
                ></div>
                <Separator></Separator>
              </div>
              <Responsibilities>
                <h2>
                  {item.position} - {item.company}
                </h2>
                <p>• {item.responsibilities}</p>
              </Responsibilities>
            </WorkListItem>
          );
        })}
      </WorkList>
    </Work>
  );
}

export default WorkPlaceComponent;
