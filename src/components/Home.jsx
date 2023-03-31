import styled from "styled-components";
import Button from "../assets/buttons/HomeButton";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
`;
const InnerContentWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 16px 24px;
  @media (max-width: 768px) {
    padding: 0px 16px;
  }
`;
const InnerContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: 0px;
  margin-right: 0px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-left: -16px;
    margin-right: -16px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-right: 0px;
  @media (min-width: 768px) {
    display: flex;
    flex-basis: 66.6667%;
    width: 66.6667%;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (min-width: 980px) {
    display: flex;
    flex-basis: 75%;
    width: 75%;
  }
  span:first-child {
    margin: 0px;
    font: 600 1.6em / 1.2 Raleway, sans-serif;
    color: rgb(255, 255, 255);
    @media (max-width: 768px) {
      font-size: 1.45em;
    }
  }
  span:last-child {
    font: 400 1em / 1.2 Raleway, sans-serif;
    @media (max-width: 768px) {
      font: 400 1em / 1.2 Raleway, sans-serif;
      padding: 5px;
    }
  }
  h1 {
    margin: 0px;
    span {
      color: rgb(226, 120, 108);
    }
    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
  h1 span {
    margin: 0px;
    color: rgb(226, 120, 108);
  }
`;

const RightContentParag = styled.p`
  font: 400 1.2em / 1.8 Raleway, sans-serif;
  margin-top: 20px;
  @media (max-width: 768px) {
    font: 400 1.2em / 1.6 Raleway, sans-serif;
    margin: 10px 0px;
  }
`;

const RightContentButtonsWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-align: center;
  align-items: center;
  margin-left: -8px;
  margin-right: -8px;
`;

const LeftContent = styled.div`
  width: 250px;
  height: 380px;
  background-color: black;
  margin: 10px 0;
  @media (min-width: 768px) {
    flex-basis: 33.3333%;
    width: 33.3333%;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (min-width: 980px) {
    flex-basis: 25%;
    width: 25%;
  }
`;

export default function Home() {
  return (
    <MainContent>
      <InnerContentWrap>
        <InnerContent>
          <RightContent>
            <span>Hey there,</span>
            <h1>
              my name is Andrii Yatsenko.
              <br />I am a <span>Front-end Developer</span> based in Kyiv,
              Ukraine.
            </h1>
            <RightContentParag>
              Specialized in <strong>frontend development</strong> with 1 year
              of experience in building the web and working with technologies
              like React
            </RightContentParag>
            <RightContentButtonsWrap>
              <Button margin="10px 10px" text={"My portfolio"}></Button>
              <Button margin="10px 10px" text={"Get in touch"}></Button>
              <div>
                <span>
                  or learn more{" "}
                  <a style={{ color: "rgb(226, 120, 108)" }}>about me.</a>
                </span>
              </div>
            </RightContentButtonsWrap>
          </RightContent>
          <LeftContent></LeftContent>
        </InnerContent>
      </InnerContentWrap>
    </MainContent>
  );
}
