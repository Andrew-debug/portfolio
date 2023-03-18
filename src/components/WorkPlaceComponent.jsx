import React from "react";
import styled from "styled-components";

const experience = [
  {
    date: "November 2020 - Present",
    city: "Stockholm",
    position: "Software Engineer",
    company: "Nordnet Bank AB",
    responsibilities:
      "Currently working in a full-stack/devops team with a goal of building a bank in cloud using some of the latest technologies like Google Cloud Platform, Kubernetes + Istio, Java + Spring boot and React.",
  },
  {
    date: "November 2020 - Present",
    city: "Stockholm",
    position: "Software Engineer",
    company: "Nordnet Bank AB",
    responsibilities:
      "Currently working in a full-stack/devops team with a goal of building a bank in cloud using some of the latest technologies like Google Cloud Platform, Kubernetes + Istio, Java + Spring boot and React.",
  },
];

const Work = styled.div`
  h3 {
    padding: 20px 0 20px;
    font-size: 32px;
    font-weight: 400;
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
  p {
    padding: 20px 0 40px;
    font-weight: 200;
    font-size: 14;
    line-height: 1.6;
  }
`;

const Separator = styled.div`
  position: absolute;
  top: 5px;
  left: 50%;
  bottom: 0px;
  width: 1px;
  transform: translateX(-1px);
  z-index: -1;
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
              <div style={{ flex: "0 0 180px", paddingRight: 15 }}>
                <WorkDate>{item.date}</WorkDate>
                <WorkCity>{item.city}</WorkCity>
              </div>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    marginTop: -5,
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
