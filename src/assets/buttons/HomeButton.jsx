import { NavLink } from "react-router-dom";
import styled from "styled-components";
const ButtonSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  border: 2px solid rgb(226, 120, 108);
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.3s;
  }
`;

const Button = styled.button`
  width: ${(props) => `${props.width}px`};
  border: none;
  display: inline-block;
  position: relative;
  padding: 20px 50px;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  color: white;
  z-index: 1;
  font-family: inherit;
  font-weight: 600;
  margin: ${(props) => `${props.margin}`};
  @media (max-width: 768px) {
    margin: 5px 5px 0px 0px;
    padding: 15px 30px;
  }
  p {
    font-weight: 600;
    color: rgb(255, 255, 255);
    @media (max-width: 768px) {
      font: 600 0.9em / 1.6 "Raleway", sans-serif;
    }
  }
  &:hover ${ButtonSpan}::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: rgb(226, 120, 108);
  }

  &:hover {
    color: white;
  }
  &:active ${ButtonSpan}::before {
    background: #7d7b7b;
  }
`;

function HomeButton({ text, width, type, margin, link }) {
  return (
    <Button margin={margin} type={type} width={width}>
      <NavLink to={link}>
        <p>{text}</p>
        <ButtonSpan></ButtonSpan>
      </NavLink>
    </Button>
  );
}

export default HomeButton;
