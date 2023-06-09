import React from "react";
import styled from "styled-components";
import Button from "../assets/buttons/HomeButton";
import { useLocation } from "react-router-dom";
const Container = styled.div`
  background: linear-gradient(45deg, rgb(36, 52, 95) 0%, rgb(28, 40, 73) 100%);
  padding-top: 60px;
  padding-bottom: 60px;
  margin-top: 50px;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 0px 24px;
  @media (max-width: 768px) {
    padding: 0px 16px;
  }
  h2 {
    margin: 0px;
    font: 600 2.4em / 1.2 "Raleway", sans-serif;
    margin-bottom: 16px;
    @media (max-width: 768px) {
      font-size: 2em;
      margin-bottom: 0px;
    }
  }
  p {
    margin: 0px;
    padding: 2px 0;
    @media (max-width: 768px) {
      font-size: 0.9em;
      padding: 0;
    }
  }
`;
const ButtonsWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: -8px;
  margin-right: -8px;
`;

function GetInTouch({ setopeningContent, setframeAllContent }) {
  const { pathname } = useLocation();
  function triggerAnimation(currentPathname) {
    if (pathname !== currentPathname) {
      setTimeout(() => {
        setopeningContent(true);
      }, 500);
      setTimeout(() => {
        setopeningContent(false);
      }, 1000);

      setframeAllContent(true);
      setTimeout(() => {
        setframeAllContent(false);
      }, 550);
    }
  }
  return (
    <Container>
      <Content>
        <h2>Let's get in touch</h2>
        <p>Do you have an interesting project I can help with?</p>
        <p>Feel free to reach out to me!</p>
        <ButtonsWrap>
          <div onClick={() => triggerAnimation("/contact")}>
            <Button
              width="205"
              margin="10px"
              text={"Get in touch"}
              link="/contact"
            />
          </div>
          {pathname.startsWith("/portfolio") && (
            <div onClick={() => triggerAnimation("/about")}>
              <Button
                width="205"
                margin="10px"
                text={"About me"}
                link="/about"
              />
            </div>
          )}
          {pathname === "/about" && (
            <div onClick={() => triggerAnimation("/portfolio")}>
              <Button
                width="205"
                margin="10px"
                text={"My Portfolio"}
                link="/portfolio"
              />
            </div>
          )}
        </ButtonsWrap>
      </Content>
    </Container>
  );
}

export default GetInTouch;
