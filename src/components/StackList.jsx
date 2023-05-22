import React from "react";
import styled from "styled-components";
import javaScript from "../assets/icons/javaScript.png";
import css3 from "../assets/icons/css3.png";
import html5 from "../assets/icons/html5.png";
import npm from "../assets/icons/npm.png";
import photoshop from "../assets/icons/photoshop.png";
import react from "../assets/icons/react.png";
import styledComponents from "../assets/icons/styled-components.png";
import typescript from "../assets/icons/typescript.png";
import git from "../assets/icons/git.png";

const list = [
  { img: javaScript, techName: "JavaScript" },
  { img: react, techName: "React" },
  { img: typescript, techName: "TypeScript" },
  { img: html5, techName: "HTML" },
  { img: css3, techName: "CSS" },
  { img: git, techName: "Git" },
  { img: styledComponents, techName: "styled-components" },
  { img: npm, techName: "NPM" },
  { img: photoshop, techName: "Photoshop" },
];

const Contaier = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  p {
    margin-right: 20px;
    padding-top: 3px;
    font: 400 0.9em / 1.2 "Raleway", sans-serif;
    @media (max-width: 768px) {
      margin: 5px 10px 5px;
    }
  }
`;
function StackList() {
  return (
    <Contaier>
      {list.map((item, index) => {
        return (
          <ItemWrap key={index}>
            <img src={item.img} alt={item.techName} />
            <p>{item.techName}</p>
          </ItemWrap>
        );
      })}
    </Contaier>
  );
}

export default StackList;