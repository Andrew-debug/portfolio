import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GetInTouch from "./GetInTouch";
import StackList from "./StackList";
import WorkPlaceComponent from "./WorkPlaceComponent";
import highResPortImage from "../assets/data/portfolioImages/portfolio-photo.jpg";
const MainContent = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 40px 24px;
  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const AboutWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background: ${(props) =>
    props.isNavOpen
      ? "rgb(28, 39, 72)"
      : "linear-gradient(45deg, rgb(28, 40, 73) 0%, rgb(36, 52, 95) 100%)"};
  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex-basis: 75%;
  width: 75%;
  padding: 15px;
  color: white;
  @media (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
  }
  h1 {
    margin: 0px;
    font: 600 2.2em / 1.2 "Raleway", sans-serif;
    color: rgb(255, 255, 255);
    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    font-family: Raleway, sans-serif;
    line-height: 1.6;
    margin: 12px 0px 0px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Right = styled.div`
  position: relative;
  background-color: transparent;
  margin-top: 15px;
  width: 250px;
  height: 300px;
  overflow: hidden;
  border-radius: 2px;
`;

const RightImage = styled.img`
  position: absolute;
  top: -70px;
  width: 100%;
`;

const TechWorkWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 32px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const Tech = styled.div`
  flex-basis: 100%;
  width: 100%;
  h2 {
    margin: 0px;
    font: 600 1.8em / 1.2 "Raleway", sans-serif;
    color: rgb(255, 255, 255);
    padding: 20px 15px 5px 0;
    @media (max-width: 768px) {
      font-size: 1.6em;
    }
  }
`;

const AsyncImage = ({ imageSrc }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  useEffect(() => {
    setLoadedSrc(null);
    if (imageSrc) {
      const handleLoad = () => {
        setLoadedSrc(imageSrc);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = imageSrc;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [imageSrc]);
  if (loadedSrc === imageSrc) {
    return <RightImage src={imageSrc} />;
  }
  return null;
};

export default function About({ setopeningContent, setframeAllContent }) {
  return (
    <>
      <MainContent>
        <AboutWrap>
          <Left>
            <h1>About me</h1>
            <p>
              I am a 25 years old passionate
              <strong>Front-end Developer</strong> based in Kyiv, Ukraine who
              enjoys building web applications. Very positive and highly
              motivated person with over 2 years of experience in building
              beautiful websites and web applications.
            </p>
            <p>
              Unfortunately, I'm unemployed right now, but I'm studying really
              hard and trying to make my dreams come true. And one them is to
              become a really cool front-end developer one day.
            </p>
            <p>
              Outside work I really enjoy cooking delicious food, playing chess
              and video games, rewatching the Lord of the Ring movies and
              reading books.
            </p>
          </Left>
          <Right>
            <RightImage src={highResPortImage} alt="loh" />
          </Right>
        </AboutWrap>
        <TechWorkWrap>
          <Tech>
            <h2>Most used technologies</h2>
            <StackList />
          </Tech>
          <WorkPlaceComponent />
        </TechWorkWrap>
      </MainContent>
      <GetInTouch
        setopeningContent={setopeningContent}
        setframeAllContent={setframeAllContent}
      />
    </>
  );
}
