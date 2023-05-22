import { NavLink, useLocation } from "react-router-dom";
import ay2 from "../assets/data/portfolioImages/ay-2.png";

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
  @media (max-width: 768px) {
    flex-direction: row;
    bottom: auto;
    right: 0px;
    width: auto;
    height: 60px;
  }
`;

const HeaderLogo = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: background 0.2s ease 0s;
  background: rgb(226, 120, 108);
  @media (max-width: 768px) {
    width: 80px;
    height: 60px;
  }
`;

const HeaderLogoImg = styled.img`
  margin: 5px;
  width: 70px;
  height: 70px;
  object-fit: contain;
  @media (max-width: 768px) {
    margin: 0 10px;
    width: 60px;
    height: 60px;
  }
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
  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
  }
`;

const NavButtonContent = styled.div`
  height: 2px;
  background: rgb(255, 255, 255);
  transition: transform 0.2s ease-out 0s, opacity 0.2s 0s,
    margin-top 0.1s linear 0s;
  &:nth-child(1) {
    transform-origin: 0px 50% 0px;
    ${(props) =>
      props.isNavOpen &&
      "transform: translateY(-2px) translateX(5px) rotate(45deg)"}
  }
  &:nth-child(n + 2) {
    margin-top: 8px;
  }
  &:nth-child(2) {
    ${(props) => props.isNavOpen && "opacity: 0"}
  }
  &:nth-child(3) {
    transform-origin: 0px 50% 0px;
    transform: scaleX(0.85);

    ${(props) =>
      props.isNavOpen &&
      "transform: translateY(3px) translateX(5px) rotate(-45deg)"}
  }
`;

const NavButtonSpan = styled.span`
  display: block;
  width: 52px;
  padding: 12px 8px;
  :hover ${NavButtonContent} {
    &:nth-child(n + 2) {
      ${(props) => !props.isNavOpen && "margin-top: 10px"}
    }
    &:nth-child(3) {
      ${(props) => !props.isNavOpen && "transform: scaleX(1)"}
    }
  }
`;

const SocialLinks = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      margin: 25px 5px 0;
      flex-direction: row;
    }
  }
  ul li a svg {
    width: 26px;
    height: 26px;
    fill: white;
    margin-bottom: 20px;
    user-select: none;
  }
  ul li a svg:hover {
    fill: rgb(226, 120, 108);
    transition: fill 0.2s ease 0s;
  }
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
    props.isNavOpen ? "rgba(0, 0, 0, 0.1) 0px 0px 25px" : "none"};
  ${(props) => props.isNavOpen && "transform: translateX(100%)"};
  @media (max-width: 768px) {
    top: 60px;
    left: -340px;
    /* height: 100vh; */
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  list-style: none;
  /* @media (max-width: 768px) {
    flex: 0 0 0%;
  } */
`;

const NavLinksUnit = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  margin: 0px;
  transition: opacity 0.25s ease 0s, transform 0.25s ease;

  &:nth-child(1) {
    transition-delay: ${(props) => (props.isNavOpen ? "0.15s" : "0")};
  }
  &:nth-child(2) {
    transition-delay: ${(props) => (props.isNavOpen ? "0.3s" : "0")};
  }
  &:nth-child(3) {
    transition-delay: ${(props) => (props.isNavOpen ? "0.45s" : "0")};
  }
  &:nth-child(4) {
    transition-delay: ${(props) => (props.isNavOpen ? "0.6s" : "0")};
  }

  opacity: ${(props) => (props.isNavOpen ? "1" : "0")};
  transform: ${(props) =>
    props.isNavOpen ? "transform: translateX(0px)" : "translateX(-100%)"};
`;

const NavLinkSpanTitle = styled.h1`
  transition: color 0.2s ease 0s;
  color: rgb(255, 255, 255);
  margin: 0px;
  font: 600 1.6em / 1.2 "Raleway", sans-serif;
`;

const NavigLink = styled(NavLink)`
  flex: 1 1 0%;
  padding: 8px 32px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
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
  margin: 5px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: inherit;
`;

const data = [
  {
    linkPathname: "/",
    title: "Home",
    subtitle: "Introduction",
  },
  {
    linkPathname: "/about",
    title: "About",
    subtitle: "Professional skills and experience",
  },
  {
    linkPathname: "/portfolio",
    title: "Portfolio",
    subtitle: "Some of the projects I worked on",
  },
  {
    linkPathname: "/contact",
    title: "Contact",
    subtitle: "Get in touch",
  },
];

export default function Root({
  isNavOpen,
  setisNavOpen,
  setopeningContent,
  setframeAllContent,
}) {
  const { pathname } = useLocation();
  function triggerAnimation(currentPathname) {
    setisNavOpen(false);

    if (pathname !== currentPathname) {
      setTimeout(() => {
        setopeningContent(true);
      }, 500);
      setTimeout(() => {
        setopeningContent(false);
      }, 1000);

      setframeAllContent(true);
      setTimeout(() => {
        setframeAllContent(false);
      }, 550);
    }
  }
  return (
    <>
      <Header>
        <NavLink to="/" onClick={() => triggerAnimation("/")}>
          <HeaderLogo>
            <HeaderLogoImg src={ay2} alt="logo" />
          </HeaderLogo>
        </NavLink>
        <NavButtonToggle onClick={() => setisNavOpen((prev) => !prev)}>
          <NavButtonSpan isNavOpen={isNavOpen}>
            <NavButtonContent isNavOpen={isNavOpen} />
            <NavButtonContent isNavOpen={isNavOpen} />
            <NavButtonContent isNavOpen={isNavOpen} />
          </NavButtonSpan>
        </NavButtonToggle>
        <SocialLinks>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/yatsenkoandy/"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/Andrew-debug" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                </svg>
              </a>
            </li>
          </ul>
        </SocialLinks>
      </Header>
      <Nav isNavOpen={isNavOpen}>
        <NavLinks>
          {data.map((item, index) => {
            return (
              <NavLinksUnit key={index} isNavOpen={isNavOpen}>
                <NavigLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={() => triggerAnimation(item.linkPathname)}
                  to={item.linkPathname}
                >
                  <NavLinkSpanTitle>{item.title}</NavLinkSpanTitle>
                  <NavLinkSpanContent>{item.subtitle}</NavLinkSpanContent>
                </NavigLink>
              </NavLinksUnit>
            );
          })}
        </NavLinks>
      </Nav>
    </>
  );
}
