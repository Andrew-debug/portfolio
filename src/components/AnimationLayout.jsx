import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const Wrap = styled.main`
  position: relative;
  padding-left: 80px;
  transition: transform 0.3s ease 0s;
  perspective: 500px;
  transform: translateZ(0px);
`;

const Container = styled.div`
  transform-origin: 100% 0px 0px;
  overflow: hidden;
  height: ${(props) => (props.contentClosingDelay ? "100vh !important" : "")};
  transition: ${(props) =>
    props.isNavOpen
      ? "all 0.4s ease 0s"
      : "all 0.3s ease 0s, opacity 0.3s ease 0s"};

  transform: ${(props) =>
    props.isNavOpen && "translate(-30px, 3%) rotateY(-8deg) scale(0.85, 0.94)"};
  background-color: ${(props) =>
    props.isNavOpen ? "rgb(18,25,47)" : "rgb(22,32,58)"};
  cursor: ${(props) => props.isNavOpen && "pointer"};
  :hover {
    transform-origin: ${(props) => props.isNavOpen && "90% 0px 0px"};
    ${(props) =>
      props.isNavOpen &&
      `
      ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(22, 32, 58, 0.1);
      z-index: 998;
    }
    `}
  }
`;

const initialContainer = {
  transformOrigin: "100% 0px 0px",
  transition: "transform 0.3s ease 0s, opacity 0.3s ease 0s",
  transform: "translate(0, 0%) rotateY(0) scale(1)",
  backgroundColor: "rgb(22,32,58)",
  cursor: "auto",
};

const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.openingContent ? "100%" : "0%")};
  height: 100vh;
  background: linear-gradient(45deg, rgb(36, 52, 95) 0%, rgb(28, 40, 73) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow: hidden;
`;

const makeEntrance = keyframes`
    0% {
        width: 100%;
     }
    100% {
        width: 0;
    }
 `;

const ClosingCurtain = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(45deg, rgb(36, 52, 95) 0%, rgb(28, 40, 73) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${makeEntrance} 0.5s ease-out;
`;

const roflRotation = keyframes`
    from {
      transform: rotate(-359deg);
    }
    to {
      transform: rotate(0deg);
  }
 `;
const roflRotation1 = keyframes`
    from {
      transform: rotate(0deg);
  }
    to {
      transform: rotate(359deg);
  }
 `;

const Rofl = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
  z-index: 1000;
  animation: ${roflRotation} 2s infinite linear;
`;
const Rofl1 = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
  z-index: 1000;
  animation: ${roflRotation1} 2s infinite linear;
`;
export default function AnimationLayout({
  isNavOpen,
  setisNavOpen,
  contentClosingDelay,
  setcontentClosingDelay,
  openingContent,
}) {
  return (
    <Wrap>
      <Container
        as={motion.div}
        exit={initialContainer}
        contentClosingDelay={contentClosingDelay}
        isNavOpen={isNavOpen}
        onClick={() => {
          setisNavOpen(false);

          if (isNavOpen) {
            setTimeout(() => {
              setcontentClosingDelay(false);
            }, 300);
          }
        }}
      >
        <Outlet />
      </Container>
      {!openingContent && (
        <Curtain
          as={motion.div}
          openingContent={openingContent}
          exit={{
            width: ["0%", "100%"],
            transition: {
              duration: 0.5,
              ease: "easeOut",
              repeatDelay: 1,
            },
          }}
        >
          <Rofl></Rofl>
        </Curtain>
      )}
      {openingContent && (
        <ClosingCurtain openingContent={openingContent}>
          <Rofl1></Rofl1>
        </ClosingCurtain>
      )}
    </Wrap>
  );
}
