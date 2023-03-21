import React from "react";
import styled from "styled-components";

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardTitle = styled.span`
  font-weight: bold;
  color: rgb(255, 255, 255);
  line-height: 15px;
`;

const CardContent = styled.a`
  position: absolute;
  left: 0;
  bottom: 0;
  /* edit the width to fit card */
  width: 100%;
  min-height: 225px;
  padding: 10px;
  background: rgb(226, 120, 108);
  border-top-left-radius: 20px;
  /* edit here to change the height of the content box */
  transform: translateY(150px);
  transition: transform 0.25s;
  text-decoration: none;
  ::before {
    content: "";
    position: absolute;
    top: -47px;
    right: -45px;
    width: 100px;
    height: 100px;
    transform: rotate(-175deg);
    border-radius: 50%;
    box-shadow: inset 48px 48px rgb(226, 120, 108);
  }
`;

const CardDescription = styled.p`
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.5s;
  color: rgb(255, 255, 255);
`;

const Card = styled.article`
  position: relative;
  margin: 20px 16px;
  width: 330px;
  height: 250px;
  color: rgb(255, 255, 255);
  background: #131313;
  overflow: hidden;
  border-radius: 20px;
  :hover ${CardContent} {
    transform: translateY(0);
  }
  :hover ${CardDescription} {
    opacity: 1;
    transition-delay: 0.25s;
  }
`;

const CardSubtitle = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
`;

function PortfolioCard({ link, image, title, description, subtitle }) {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardContent href={link} target="_blank">
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default PortfolioCard;
