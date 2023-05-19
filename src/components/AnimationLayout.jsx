import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import ay2 from "../assets/data/portfolioImages/ay-2.png";

const Wrap = styled.main`
  position: relative;
  padding-left: 80px;
  transition: transform 0.3s ease 0s;
  perspective: 500px;
  transform: translateZ(0px);
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const OutletWrap = styled.div`
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: ${(props) => props.isNavOpen && "none"};
  }
`;

const Container = styled.div`
  transform-origin: 100% 0px 0px;
  overflow: hidden;
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
  @media (max-width: 768px) {
    transform: ${(props) => props.isNavOpen && "translateX(340px)"};
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

const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
export default function AnimationLayout({
  isNavOpen,
  setisNavOpen,
  contentClosingDelay,
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
        }}
      >
        <OutletWrap isNavOpen={isNavOpen}>
          <Outlet />
        </OutletWrap>
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
          <Logo src={ay2} />
        </Curtain>
      )}
      {openingContent && (
        <ClosingCurtain openingContent={openingContent}>
          <Logo src={ay2} />
        </ClosingCurtain>
      )}
    </Wrap>
  );
}
