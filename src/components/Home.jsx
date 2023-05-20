import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
////
import Button from "../assets/buttons/HomeButton";
import ay1 from "../assets/data/portfolioImages/ay-1.png";
import react from "../assets/icons/react.png";
import typescript from "../assets/icons/typescript.png";
import javaScript from "../assets/icons/javaScript.png";
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
`;
const InnerContentWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 16px 24px;
  @media (max-width: 768px) {
    padding: 0px 16px;
  }
`;
const InnerContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: 0px;
  margin-right: 0px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-left: -16px;
    margin-right: -16px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-right: 0px;
  @media (min-width: 768px) {
    display: flex;
    flex-basis: 66.6667%;
    width: 66.6667%;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (min-width: 980px) {
    display: flex;
    flex-basis: 75%;
    width: 75%;
  }
  span:first-child {
    margin: 0px;
    font: 600 1.6em / 1.2 Raleway, sans-serif;
    color: rgb(255, 255, 255);
    @media (max-width: 768px) {
      font-size: 1.45em;
    }
  }
  span:last-child {
    font: 600 1em / 1.2 Raleway, sans-serif;
    @media (max-width: 768px) {
      font: 400 1em / 1.2 Raleway, sans-serif;
      padding: 5px;
    }
  }
  h1 {
    margin: 0px;
    span {
      color: rgb(226, 120, 108);
    }
    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
  h1 span {
    margin: 0px;
    color: rgb(226, 120, 108);
  }
`;

const LeftContentParag = styled.p`
  font: 400 1.2em / 1.8 Raleway, sans-serif;
  margin-top: 20px;
  @media (max-width: 768px) {
    font: 400 1.2em / 1.6 Raleway, sans-serif;
    margin: 10px 0px;
  }
`;

const LeftContentButtonsWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-align: center;
  align-items: center;
  margin-left: -8px;
  margin-right: -8px;
`;

const RightContent = styled.div`
  position: relative;
  background-color: transparent;
  margin: 10px 0;
  @media (min-width: 768px) {
    flex-basis: 33.3333%;
    width: 33.3333%;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (min-width: 980px) {
    flex-basis: 25%;
    width: 25%;
  }
`;

const RightImg = styled.img`
  position: absolute;
  top: -100px;
  width: 220px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Slider = styled.span`
  position: relative;
  height: 38px;
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
`;

const AutoSlider = () => {
  const [slider, setSlider] = useState(0);
  const [sliderPosition, setsliderPosition] = useState({
    transform: "translateY(0%)",
  });
  const data = [
    {
      tech: "React",
      imgPath: react,
    },
    {
      tech: "JavaScript",
      imgPath: javaScript,
    },
    {
      tech: "TypeScript",
      imgPath: typescript,
    },
  ];
  useEffect(() => {
    const dataLength = Object.keys(data).length;
    const moveSlider = () => {
      const newPosition = {
        transform: `translateY(-${33 * slider}%)`,
      };
      setsliderPosition(newPosition);
      if (slider === dataLength - 1) {
        setSlider(0);
      } else {
        setSlider(slider + 1);
      }
    };

    setTimeout(() => {
      moveSlider();
    }, 2000);
  }, [sliderPosition]);

  return (
    <Slider
      style={{
        position: "relative",
        height: "38px",
        overflow: "hidden",
        display: "inline-block",
        verticalAlign: "top",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s ease 0s",
          ...sliderPosition,
        }}
      >
        {data.map((item) => {
          return (
            <span
              key={item.tech}
              style={{ display: "flex", alignItems: "center", height: "38px" }}
            >
              <span style={{ display: "inline-block", marginRight: "6px" }}>
                <img
                  src={item.imgPath}
                  alt="tech"
                  style={{
                    width: "24px",
                    height: "24px",
                    flexShrink: 0,
                    display: "block",
                  }}
                />
              </span>
              <span style={{ fontWeight: 300, fontSize: 22 }}>{item.tech}</span>
            </span>
          );
        })}
      </span>
    </Slider>
  );
};

export default function Home({ setopeningContent, setframeAllContent }) {
  const { pathname } = useLocation();
  function triggerAnimation(currentPathname) {
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
    <MainContent>
      <InnerContentWrap>
        <InnerContent>
          <LeftContent>
            <span>Hey there,</span>
            <h1>
              my name is Andrii Yatsenko.
              <br />I am a <span>Front-end Developer</span> based in Kyiv,
              Ukraine.
            </h1>
            <LeftContentParag>
              Specialized in <strong>frontend development</strong> with 1 year
              of experience in building the web and working with technologies
              like <AutoSlider />
            </LeftContentParag>
            <LeftContentButtonsWrap>
              <div onClick={() => triggerAnimation("/portfolio")}>
                <Button
                  margin="10px 10px"
                  text={"My portfolio"}
                  link="/portfolio"
                ></Button>
              </div>
              <div onClick={() => triggerAnimation("/contact")}>
                <Button
                  margin="10px 10px"
                  text={"Get in touch"}
                  link="/contact"
                ></Button>
              </div>
              <span onClick={() => triggerAnimation("/about")}>
                or learn more{" "}
                <NavLink to="/about" style={{ color: "rgb(226, 120, 108)" }}>
                  about me.
                </NavLink>
              </span>
            </LeftContentButtonsWrap>
          </LeftContent>
          <RightContent>
            <RightImg src={ay1} alt="logo" />
          </RightContent>
        </InnerContent>
      </InnerContentWrap>
    </MainContent>
  );
}
