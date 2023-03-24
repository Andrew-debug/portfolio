import React from "react";
import styled, { keyframes } from "styled-components";

const makeEntrance = keyframes`
    0% {
        width: 0;
    }
    50% {
        width: 100vw;
    }
    100% {
        right: 0;
        width: 0;
    }

`;

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 0;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(28, 40, 73);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 997;
  animation: ${makeEntrance} 1s linear infinite;
`;

const EmptyContainer = styled.div`
  position: absolute;
  top: 0;
  width: 0;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(28, 40, 73);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 997;
`;

function TransitionPage({ transitionOn }) {
  return <>{transitionOn ? <Container /> : <EmptyContainer />}</>;
}

export default TransitionPage;
