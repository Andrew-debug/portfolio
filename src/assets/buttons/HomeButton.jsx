import styled from "styled-components";

const ButtonSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  border: 3px solid rgb(226, 120, 108);
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: rgb(22, 32, 58);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.5s;
  }
`;

const Button = styled.button`
  border: none;
  display: block;
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
  margin: 20px 15px 20px 5px;
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

function HomeButton({ text }) {
  return (
    <div style={{ wdith: 400, height: 100 }}>
      <Button>
        <p>{text}</p>
        <ButtonSpan></ButtonSpan>
      </Button>
    </div>
  );
}

export default HomeButton;
