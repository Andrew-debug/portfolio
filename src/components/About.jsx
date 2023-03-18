import React from "react";
import styled from "styled-components";
import StackList from "./StackList";
import WorkPlaceComponent from "./WorkPlaceComponent";

const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 0px 24px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const AboutWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const Left = styled.div`
  flex-basis: 75%;
  width: 75%;
  padding: 15px;
  color: white;
  h1 {
    font: 600 2.4em / 1.2 Raleway, sans-serif;
  }
  p {
    font: 400 1.05em / 1.6 Raleway, sans-serif;
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

export default function About() {
  return (
    <Container>
      <AboutWrap
        style={{
          background:
            "linear-gradient(45deg, rgb(28, 40, 73) 0%, rgb(36, 52, 95) 100%)",
        }}
      >
        <Left>
          <h1>About Andrii Yatsenko</h1>
          <p>
            I am a 27 years old passionate Fullstack Web Developer based in
            Stockholm, Sweden who enjoys building software. Very positive and
            highly motivated person with over 9 years of experience in building
            beautiful websites, web and mobile applications with a stronger
            focus on the frontend technologies.
          </p>
          <p>
            Right now I work as a Software Engineer at Nordnet Bank AB, trying
            to make investing and saving money easier for all people in the
            Nordic countries.
          </p>
          <p>
            Outside work I really enjoy cooking delicious food, playing chess
            and video games, rewatching Marvel movies and lifting heavy weights.
          </p>
        </Left>
        <Right />
      </AboutWrap>
      <TechWorkWrap>
        <Tech>
          <h2>Most used technologies</h2>
          {/* <div
            style={{ width: "100%", height: 300, backgroundColor: "black" }}
          ></div> */}
          <StackList />
        </Tech>
        <WorkPlaceComponent />
      </TechWorkWrap>
    </Container>
  );
}
