import React from "react";
import styled from "styled-components";
import Button from "../assets/buttons/HomeButton";
const Container = styled.div`
  background: linear-gradient(45deg, rgb(36, 52, 95) 0%, rgb(28, 40, 73) 100%);
  padding-top: 80px;
  padding-bottom: 80px;
  margin-top: 10px;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 0px 24px;
  h2 {
    font-size: 42px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    margin-bottom: 16px;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    padding: 2px 0;
  }
`;
const ButtonsWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: -8px;
  margin-right: -8px;
`;

function GetInTouch() {
  return (
    <Container>
      <Content>
        <h2>Let's get in touch</h2>
        <p>Do you have an interesting project I can help with?</p>
        <p>Feel free to reach out to me!</p>
        <ButtonsWrap>
          <Button text={"Get in touch"} />
          <Button text={"About me"} />
        </ButtonsWrap>
      </Content>
    </Container>
  );
}

export default GetInTouch;
