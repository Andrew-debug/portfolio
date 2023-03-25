import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import styled, { keyframes } from "styled-components";
import TransitionPage from "./TransitionPage";

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
  height: ${(props) => props.contentClosingDelay && "100vh !important"};
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

const style = {
  position: "absolute",
  top: 0,
  width: 0,
  height: "100%",
  overflow: "hidden",
  backgroundColor: "rgb(28, 40, 73)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
  // animation: `${makeEntrance} 1s linear`,
};

const makeEntrance = keyframes`
    0% {
        width: 0;
     }
     50% {
         width: 100%;
    }
    100% {
        right: 0;
        width: 0;
    }

 `;
const initialContainer = {
  transformOrigin: "100% 0px 0px",
  transition: "transform 0.3s ease 0s, opacity 0.3s ease 0s",
  overflow: "visible",
  transition: "all 0.3s ease 0s, opacity 0.3s ease 0s",
  transform: "translate(0, 0%) rotateY(0) scale(1)",
  backgroundColor: "rgb(22,32,58)",
  cursor: "auto",
};

export default function AnimationLayout({
  isNavOpen,
  setisNavOpen,
  contentClosingDelay,
}) {
  return (
    <Wrap>
      <Container
        as={motion.div}
        ////////////////////////////////
        exit={initialContainer}
        ////////////////////////////////
        contentClosingDelay={contentClosingDelay}
        isNavOpen={isNavOpen}
        onClick={() => setisNavOpen(false)}
      >
        <Outlet />
        {/* <TransitionPage /> */}
      </Container>
    </Wrap>
  );
}
