import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const CardArticle = styled.article`
  position: relative;
  overflow: hidden;
  color: rgb(255, 255, 255);
  transition: background 0.25s ease 0s, box-shadow 0.25s ease 0s;
  background: linear-gradient(45deg, rgb(36, 52, 95) 0%, rgb(32, 46, 84) 100%);
`;

const CardImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  /* object-position: center center; */
  /* opacity: 0; */
  /* transition-delay: 500ms; */
`;

const CardCover = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  transform: translateY(-100%);
  opacity: 1;
  background: rgba(22, 32, 58, 0.2);
  transition: transform 0.25s ease-in-out 0s, background 0.25s 0s,
    opacity 0.25s 0s;
`;
const CoverImageWrap = styled.div`
  opacity: 0;
  transform: scale(0.4) rotate(-180deg);
  transition: transform 0.25s ease 0s, opacity 0.25s ease;
`;
const CardHeader = styled.header`
  position: relative;
  overflow: hidden;
  padding: 20px;
`;
const CardTitleWrap = styled.div`
  transition: transform 0.25s ease 0s, opacity 0.25s ease 0s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const CardTitle = styled.h3`
  font-weight: 600;
  color: rgb(255, 255, 255);
  text-decoration: none;
`;
const CardSubtitle = styled.span`
  font-size: 12px;
  color: rgb(255, 255, 255);
`;
const CardTechsWrap = styled.div`
  position: absolute;
  inset: 0px;
  padding: 12px 16px 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.25s ease 0s, opacity 0.25s ease 0s;
`;
const Techs = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: -4px;
  margin-right: -4px;
`;

const Tech = styled.div`
  ${(props) => props.animateChild}
`;

const Card = styled.div`
  position: relative;
  width: 340px;
  height: 280px;
  margin: 14px;
  @media (max-width: 768px) {
    margin: 14px 0;
  }
  :hover ${CardCover} {
    transform: translateY(0);
    background: rgba(22, 32, 58, 0.5);
  }
  :hover ${CardTitleWrap} {
    transform: translateY(150%);
    opacity: 0;
  }
  :hover ${CardTechsWrap} {
    transform: translateY(0);
  }
  :hover ${CoverImageWrap} {
    opacity: 1;
    transform: scale(1) rotate(0);
    transition-delay: 0.3s;
  }
`;
function PortfolioCard({ link, image, title, description, id, techUsed }) {
  const [cardHovered, setcardHovered] = useState(false);

  function nthChild(i, num) {
    return `
         &:nth-child(${i + 1}) {
          transition-delay: ${num}ms;
         }
      `;
  }

  function animateChild() {
    let num = 0;
    let str = "";
    for (let index = 0; index < techUsed.length; index += 1) {
      num += 100;
      str += nthChild(index, num);
    }
    return str;
  }

  const techStyles = {
    opacity: 0,
    transform: " translateY(-150%)",
    fontSize: "14px",
    fontWeight: "400",
    height: "28px",
    lineHeight: "28px",
    margin: "6px 4px 0px",
    padding: "0px 10px",
    background: "rgba(0, 0, 0, 0.2)",
    transitionProperty: "transform, opacity",
    transitionTimingFunction: "ease, ease",
    transitionDuration: "0.25s, 0.25s",
    color: "rgb(255, 255, 255)",
  };

  return (
    <AnimatePresence>
      <Card
        as={motion.div}
        key={id}
        layout
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        // exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        //////////////////////
        onMouseEnter={() => setcardHovered(true)}
        onMouseLeave={() => setcardHovered(false)}
      >
        <a style={{ textDecoration: "none" }} href={link} target="_blank">
          <CardArticle>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ width: "100%", paddingBottom: "56%" }}></div>
                <CardImage src={image} alt={title} />
              </div>
              <CardCover>
                <CoverImageWrap>
                  <svg
                    viewBox="0 0 20 20"
                    width="40px"
                    height="40px"
                    fill="rgb(255, 255, 255)"
                  >
                    <path d="M19.872 10.166c-0.047-0.053-1.182-1.305-2.956-2.572-1.047-0.748-2.1-1.344-3.13-1.773-1.305-0.544-2.579-0.82-3.786-0.82s-2.481 0.276-3.786 0.82c-1.030 0.429-2.083 1.026-3.13 1.773-1.774 1.267-2.909 2.52-2.956 2.572-0.171 0.19-0.171 0.479 0 0.669 0.047 0.053 1.182 1.305 2.956 2.572 1.047 0.748 2.1 1.344 3.13 1.773 1.305 0.544 2.579 0.82 3.786 0.82s2.481-0.276 3.786-0.82c1.030-0.429 2.083-1.026 3.13-1.773 1.774-1.267 2.909-2.52 2.956-2.572 0.171-0.19 0.171-0.479 0-0.669zM12.574 6.438c0.907 0.763 1.426 1.873 1.426 3.062 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.188 0.519-2.299 1.426-3.062 0.822-0.268 1.691-0.438 2.574-0.438s1.752 0.17 2.574 0.438zM16.317 12.606c-1.533 1.092-3.873 2.394-6.317 2.394s-4.784-1.302-6.317-2.394c-1.157-0.824-2.042-1.658-2.489-2.106 0.447-0.448 1.332-1.281 2.489-2.106 0.53-0.378 1.156-0.78 1.85-1.145-0.347 0.688-0.533 1.455-0.533 2.251 0 2.757 2.243 5 5 5s5-2.243 5-5c0-0.796-0.186-1.563-0.533-2.251 0.694 0.365 1.32 0.768 1.85 1.145 1.157 0.824 2.042 1.658 2.489 2.106-0.447 0.448-1.332 1.281-2.489 2.106z"></path>
                  </svg>
                </CoverImageWrap>
              </CardCover>
            </div>
            <CardHeader>
              <CardTitleWrap>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{description}</CardSubtitle>
              </CardTitleWrap>
              <CardTechsWrap>
                <Techs>
                  {techUsed.map((item, index) => {
                    return (
                      <Tech
                        key={index}
                        animateChild={animateChild()}
                        style={
                          cardHovered
                            ? {
                                ...techStyles,
                                transform: "translateY(0)",
                                opacity: 1,
                              }
                            : {
                                ...techStyles,
                                transitionDelay: "0s",
                              }
                        }
                      >
                        {item}
                      </Tech>
                    );
                  })}
                </Techs>
              </CardTechsWrap>
            </CardHeader>
          </CardArticle>
        </a>
      </Card>
    </AnimatePresence>
  );
}

export default PortfolioCard;
