import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import data from "../assets/data/portfolioData.js";
import GetInTouch from "./GetInTouch.jsx";
import PortfolioCard from "./PortfolioCard.jsx";

const Header = styled.div`
  background: linear-gradient(45deg, rgb(36, 52, 95) 0%, rgb(28, 40, 73) 100%);
  padding-top: 40px;
  padding-bottom: 40px;
`;
const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 0px 30px;
  h1 {
    margin: 0px;
    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
  p {
    margin: 0px;
    font: 300 1.1em / 1.6 "Raleway", sans-serif;
    color: rgba(255, 255, 255, 0.7);
  }
  @media (max-width: 768px) {
    padding: 0px 24px;
  }
`;
const PortfolioSection = styled.div`
  min-height: 500px;
`;

const PortfolioWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
`;

const FilterWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 14px;
`;
const FilterTag = styled.div`
  margin-top: 10px;
  margin-right: 10px;
`;
const FilterButton = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 16px;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  background: rgb(32, 46, 84);
  cursor: pointer;
  transition: background 0.25s ease 0s;
`;

const PortfolioWorkWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

const EmptyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 900px;
  height: 500px;
  h2 {
    font-size: 36px;
  }
`;

export default function Portfolio({ setopeningContent, setframeAllContent }) {
  const [filter, setfilter] = useState({
    all: true,
    react: false,
    typescript: false,
    javascript: false,
    "next.js": false,
    "material-ui": false,
    graphql: false,
  });

  const filtersOn = Object.keys(filter).filter((key) => filter[key] === true);
  const filteredData = data.filter(
    (item) =>
      _.intersection([...item.categories, "all"], filtersOn).length ===
      filtersOn.length
  );

  return (
    <>
      <Header>
        <HeaderWrap>
          <h1>Front-end Developer Portfolio</h1>
          <p>Just some of the projects I worked on.</p>
        </HeaderWrap>
      </Header>
      <PortfolioSection>
        <PortfolioWrap>
          <FilterWrap>
            {Object.entries(filter).map(([key, value], index) => {
              return (
                <FilterTag key={index}>
                  <FilterButton
                    style={{
                      backgroundColor: value
                        ? "rgb(226, 120, 108)"
                        : "rgb(32, 46, 84)",
                    }}
                    onClick={() => {
                      if (!index) {
                        setfilter({
                          all: true,
                          react: false,
                          typescript: false,
                          javascript: false,
                          "next.js": false,
                          "material-ui": false,
                          graphql: false,
                        });
                      } else {
                        const next = {
                          ...filter,
                          [key]: !value,
                        };
                        setfilter({
                          ...next,
                          all: Object.values(next).every((x) => !x),
                        });
                      }
                    }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </FilterButton>
                </FilterTag>
              );
            })}
          </FilterWrap>
          <PortfolioWorkWrap>
            {filteredData.length > 0 ? (
              <>
                {filteredData.map((item, index) => {
                  return (
                    <PortfolioCard
                      key={index}
                      id={item.id}
                      link={item.link}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      techUsed={item.techUsed}
                    />
                  );
                })}
              </>
            ) : (
              <EmptyContent>
                <h2>There's is no such project with all these filters on :C</h2>
              </EmptyContent>
            )}
          </PortfolioWorkWrap>
        </PortfolioWrap>
      </PortfolioSection>
      <GetInTouch
        setopeningContent={setopeningContent}
        setframeAllContent={setframeAllContent}
      />
    </>
  );
}
