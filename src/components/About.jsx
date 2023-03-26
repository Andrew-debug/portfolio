import React from "react";
import styled from "styled-components";

import GetInTouch from "./GetInTouch";
import StackList from "./StackList";
import WorkPlaceComponent from "./WorkPlaceComponent";

const MainContent = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: ${(props) =>
    props.contentClosingDelay ? "0px calc(auto - 20px)" : "0px auto"};
  /* margin: 0px auto; */
  padding: 40px 24px 40px 24px;
`;

const AboutWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background: ${(props) =>
    props.isNavOpen
      ? "rgb(28, 39, 72)"
      : "linear-gradient(45deg, rgb(28, 40, 73) 0%, rgb(36, 52, 95) 100%)"};
`;

const Left = styled.div`
  flex-basis: 75%;
  width: 75%;
  padding: 15px;
  color: white;
  h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 1.2;
    font-family: Raleway, sans-serif;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    font-family: Raleway, sans-serif;
    line-height: 1.7;
    margin: 12px 0px 0px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Right = styled.div`
  background-color: black;
  width: 250px;
  height: 250px;
`;

const TechWorkWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 32px;
`;

const Tech = styled.div`
  flex-basis: 100%;
  width: 100%;
  h2 {
    font-size: 28px;
    padding: 20px 15px 20px 0;
  }
`;

export default function About({
  isNavOpen,
  setisNavOpen,
  contentClosingDelay,
}) {
  return (
    <>
      <MainContent contentClosingDelay={contentClosingDelay}>
        <AboutWrap isNavOpen={isNavOpen}>
          <Left>
            <h1>About Andrii Yatsenko</h1>
            <p>
              I am a 27 years old passionate Fullstack Web Developer based in
              Stockholm, Sweden who enjoys building software. Very positive and
              highly motivated person with over 9 years of experience in
              building beautiful websites, web and mobile applications with a
              stronger focus on the frontend technologies.
            </p>
            <p>
              Right now I work as a Software Engineer at Nordnet Bank AB, trying
              to make investing and saving money easier for all people in the
              Nordic countries.
            </p>
            <p>
              Outside work I really enjoy cooking delicious food, playing chess
              and video games, rewatching Marvel movies and lifting heavy
              weights.
            </p>
          </Left>
          <Right />
        </AboutWrap>
        <TechWorkWrap>
          <Tech>
            <h2>Most used technologies</h2>
            <StackList />
          </Tech>
          <WorkPlaceComponent />
        </TechWorkWrap>
      </MainContent>
      <GetInTouch />
    </>
  );
}
