import React from "react";
import styled, { keyframes } from "styled-components";
const makeEntrance = keyframes`
    0% {
        width: 0;
     }
     50% {
         width: 95%;
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
  height: 100%;
  overflow: hidden;
  background-color: rgb(28, 40, 73);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${makeEntrance} 2s linear;
  /* animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) makeEntrance both infinite; */
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
  return <Container />;
}

export default TransitionPage;
