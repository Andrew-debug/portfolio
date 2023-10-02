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
import figma from "../assets/icons/icons8-figma.svg";
import graphql from "../assets/icons/icons8-graphql.svg";
import material from "../assets/icons/icons8-material-ui.svg";
import nodejs from "../assets/icons/icons8-node-js.svg";
import sass from "../assets/icons/icons8-sass.svg";
import tailwind from "../assets/icons/icons8-tailwind-css.svg";
import nextjs from "../assets/icons/next-js.svg";
import reacttestlib from "../assets/icons/octopus-64x64.png";
import reactRouter from "../assets/icons/react-router.svg";
import redux from "../assets/icons/redux.svg";
import vite from "../assets/icons/vitejs.svg";
import vitest from "../assets/icons/vitest.svg";
import nextauth from "../assets/icons/nextauth.png";

const list = [
  { img: javaScript, techName: "JavaScript" },
  { img: react, techName: "React" },
  { img: typescript, techName: "TypeScript" },
  { img: nextjs, techName: "Next.js" },
  { img: nodejs, techName: "Node.js" },
  { img: redux, techName: "Redux" },
  { img: material, techName: "Material-UI" },
  { img: reacttestlib, techName: "React Testing Library" },
  { img: vite, techName: "Vite" },
  { img: vitest, techName: "Vitest" },
  { img: git, techName: "Git" },
  { img: reactRouter, techName: "react-router" },
  { img: graphql, techName: "GraphQL" },
  { img: nextauth, techName: "NextAuth.js" },
  { img: styledComponents, techName: "styled-components" },
  { img: tailwind, techName: "Tailwind.css" },
  { img: sass, techName: "Sass" },
  { img: html5, techName: "HTML" },
  { img: css3, techName: "CSS" },
  { img: npm, techName: "NPM" },
  { img: figma, techName: "Figma" },
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
  margin-top: 10px;
  img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    object-fit: contain;
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
