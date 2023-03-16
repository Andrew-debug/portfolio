import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  width: 80px;
  padding: 0px;
  top: 0px;
  left: 0px;
  bottom: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px;
  z-index: 999;
  background: linear-gradient(45deg, rgb(22, 32, 58) 0%, rgb(32, 46, 84) 100%);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const HeaderLogo = styled.a`
  display: block;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: background 0.2s ease 0s;
  background: rgb(226, 120, 108);
`;

const NavButtonToggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transform: translateZ(0px);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px;
`;

const NavButtonContent = styled.div`
  height: 2px;
  background: rgb(255, 255, 255);
  transition: transform 0.2s ease-out 0s, opacity 0.2s 0s,
    margin-top 0.1s linear 0s;
  &:nth-child(1) {
    transform-origin: 0px 50% 0px;
    ${(props) =>
      props.navToggle &&
      "transform: translateY(-2px) translateX(5px) rotate(45deg)"}
  }
  &:nth-child(n + 2) {
    margin-top: 8px;
  }
  &:nth-child(2) {
    ${(props) => props.navToggle && "opacity: 0"}
  }
  &:nth-child(3) {
    transform-origin: 0px 50% 0px;
    transform: scaleX(0.85);

    ${(props) =>
      props.navToggle &&
      "transform: translateY(3px) translateX(5px) rotate(-45deg)"}
  }
`;

const NavButtonSpan = styled.span`
  display: block;
  width: 52px;
  padding: 12px 8px;
  :hover ${NavButtonContent} {
    &:nth-child(n + 2) {
      ${(props) => !props.navToggle && "margin-top: 10px"}
    }
    &:nth-child(3) {
      ${(props) => !props.navToggle && "transform: scaleX(1)"}
    }
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 340px;
  left: -260px;
  z-index: 998;
  display: flex;
  flex-direction: column;
  background: rgb(32, 46, 84);
  transition: transform 0.25s ease-in-out 0s;
  box-shadow: ${(props) =>
    props.navToggle ? "rgba(0, 0, 0, 0.1) 0px 0px 25px" : "none"};
  ${(props) => props.navToggle && "transform: translateX(100%)"}
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

const NavLinksUnit = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  margin: 0px;
  transition: opacity 0.25s ease 0s, transform 0.25s ease;

  &:nth-child(1) {
    transition-delay: ${(props) => (props.navToggle ? "0.15s" : "0")};
  }
  &:nth-child(2) {
    transition-delay: ${(props) => (props.navToggle ? "0.3s" : "0")};
  }
  &:nth-child(3) {
    transition-delay: ${(props) => (props.navToggle ? "0.45s" : "0")};
  }
  &:nth-child(4) {
    transition-delay: ${(props) => (props.navToggle ? "0.6s" : "0")};
  }

  opacity: ${(props) => (props.navToggle ? "1" : "0")};
  transform: ${(props) =>
    props.navToggle ? "transform: translateX(0px)" : "translateX(-100%)"};
`;

const NavLinkSpanTitle = styled.span`
  transition: color 0.2s ease 0s;
  color: rgb(255, 255, 255);
  margin: 0px;
  font: 600 1.6em / 1.2 Raleway, Helvetica, Arial, sans-serif;
`;

const NavLink = styled(Link)`
  flex: 1 1 0%;
  padding: 8px 32px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none !important;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 3px;
    background: rgb(226, 120, 108);
    transform: scaleX(0);
    transform-origin: 0px 50% 0px;
    transition: transform 0.3s ease 0s;
  }
  &:after {
    background: rgba(255, 255, 255, 0.1);
    transform: none;
    height: 2px;
  }
  &:hover {
    color: rgb(255, 255, 255);
    background: rgb(28, 40, 73);
  }
  &:hover::after,
  &:hover::before {
    transform: none;
  }
  :hover ${NavLinkSpanTitle} {
    color: rgb(226, 120, 108);
  }
`;

const NavLinkSpanContent = styled.span`
  margin: 0px;
  font: 300 1em / 1.6 Lato, Helvetica, Arial, sans-serif;
  color: inherit;
`;

export default function Root() {
  const [navToggle, setnavToggle] = useState(false);
  return (
    <>
      <Header>
        <HeaderLogo>
          <>imgA</>
        </HeaderLogo>
        <NavButtonToggle onClick={() => setnavToggle((prev) => !prev)}>
          <NavButtonSpan navToggle={navToggle}>
            <NavButtonContent navToggle={navToggle} />
            <NavButtonContent navToggle={navToggle} />
            <NavButtonContent navToggle={navToggle} />
          </NavButtonSpan>
        </NavButtonToggle>
        <SocialLinks></SocialLinks>
      </Header>
      <Nav navToggle={navToggle}>
        <NavLinks>
          <NavLinksUnit navToggle={navToggle}>
            <NavLink to="/">
              <NavLinkSpanTitle>Home</NavLinkSpanTitle>
              <NavLinkSpanContent>Introduction</NavLinkSpanContent>
            </NavLink>
          </NavLinksUnit>
          <NavLinksUnit navToggle={navToggle}>
            <NavLink to="/about">
              <NavLinkSpanTitle>About</NavLinkSpanTitle>
              <NavLinkSpanContent>
                Professional skills and experience
              </NavLinkSpanContent>
            </NavLink>
          </NavLinksUnit>
          <NavLinksUnit navToggle={navToggle}>
            <NavLink to="/portfolio">
              <NavLinkSpanTitle>Portfolio</NavLinkSpanTitle>
              <NavLinkSpanContent>
                Some of the projects I worked on
              </NavLinkSpanContent>
            </NavLink>
          </NavLinksUnit>
          <NavLinksUnit navToggle={navToggle}>
            <NavLink to="/contact">
              <NavLinkSpanTitle>Contact</NavLinkSpanTitle>
              <NavLinkSpanContent>Get in touch</NavLinkSpanContent>
            </NavLink>
          </NavLinksUnit>
        </NavLinks>
      </Nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
