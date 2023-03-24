import styled from "styled-components";
// import { motion } from "framer-motion";

import Button from "../assets/buttons/HomeButton";

export const Container = styled.main`
  transform-origin: 100% 0px 0px;
  overflow: hidden;
  height: ${(props) => props.contentClosingDelay && "100vh !important"};
  transition: ${(props) =>
    props.isNavOpen
      ? "all 0.4s ease 0s"
      : "all 0.3s ease 0s, opacity 0.3s ease 0s"};

  transform: ${(props) =>
    props.isNavOpen && "translate(-30px, 3%) rotateY(-8deg) scale(0.85, 0.94)"};
  ${(props) => props.isNavOpen && "overflow: hidden"}
  ${(props) => props.isNavOpen && "height: 100vh !important"};
  background-color: ${(props) =>
    props.isNavOpen ? "rgb(18,25,47)" : "rgb(22,32,58)"};
  cursor: ${(props) => props.isNavOpen && "pointer"};
  :hover {
    transform-origin: ${(props) => props.isNavOpen && "90% 0px 0px"};
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 100vh;

  /* overflow: hidden; */
`;
const InnerContentWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 16px 24px;

  /* overflow: hidden; */
`;
const InnerContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -16px;
  margin-right: -16px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 75%;
  width: 75%;
  margin-left: 0px;
  margin-right: 0px;
  color: white;
  font-family: Raleway, sans-serif;
  font-weight: 200;
  font-size: 20px;
`;

const RightContentButtonsWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-align: center;
  align-items: center;
  margin-left: -8px;
  margin-right: -8px;
`;

const LeftContent = styled.div``;

export default function Home({ isNavOpen, setisNavOpen, contentClosingDelay }) {
  return (
    <Container
      contentClosingDelay={contentClosingDelay}
      isNavOpen={isNavOpen}
      onClick={() => setisNavOpen(false)}
    >
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 4 } }}
        exit={{ opacity: 0 }}
      > */}
      <MainContent>
        <InnerContentWrap>
          <InnerContent>
            <RightContent>
              <span style={{ fontWeight: "600", fontSize: 28 }}>
                Hey there,
              </span>
              <h1>
                my name is Andrii Yatsenko.
                <br />I am a{" "}
                <span style={{ color: "rgb(226, 120, 108)" }}>
                  Front-end Developer
                </span>{" "}
                based in Kyiv, Ukraine.
              </h1>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: 24,
                  fontWeight: "200",
                  lineHeight: 1.6,
                  marginTop: 20,
                }}
              >
                Specialized in{" "}
                <strong style={{ color: "white" }}>frontend development</strong>{" "}
                with 1 year of experience in building the web and working with
                technologies like React
              </p>
              <RightContentButtonsWrap>
                <Button text={"My portfolio"}></Button>
                <Button text={"Get in touch"}></Button>
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
      {/* </motion.div> */}
    </Container>
  );
}
