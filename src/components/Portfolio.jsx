import React, { useState } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";

import data from "../assets/data/portfolioData.js";
import GetInTouch from "./GetInTouch.jsx";
import PortfolioCard from "./PortfolioCard.jsx";
import { Container } from "./Home";

const Header = styled.div`
  background: linear-gradient(45deg, rgb(36, 52, 95) 0%, rgb(28, 40, 73) 100%);
  padding-top: 40px;
  padding-bottom: 40px;
`;
const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 0px 24px;
  h1 {
    font-size: 42px;
    font-weight: 600;
  }
  p {
    font-weight: 300;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.7);
  }
`;
const PortfolioSection = styled.div``;

const PortfolioWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 0px 24px;
`;

const FilterWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: -4px;
  margin-right: -4px;
`;
const FilterTag = styled.div`
  padding: 10px;
`;
const FilterButton = styled.button`
  display: inline-block;
  padding: 8px 16px;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  /* background: rgb(32, 46, 84); */
  cursor: pointer;
  transition: background 0.25s ease 0s;
`;

const PortfolioWorkWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 0px 24px;
`;
const PortfolioWork = styled.div`
  width: 300px;
  height: 200px;
  background-color: black;

  margin: 20px;
  a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Portfolio({
  isNavOpen,
  setisNavOpen,
  contentClosingDelay,
}) {
  const [filter, setfilter] = useState({
    categories: {
      all: true,
      react: false,
      typescript: false,
      javascript: false,
    },
  });

  function filterFunc() {
    const selectedFilterTags = Object.entries(filter.categories).filter(
      ([key, value]) => value === true
    );

    if (!filter.categories.all) {
      const filteredData = [];
      const filteredKeys = [];
      for (const i in selectedFilterTags) {
        filteredKeys.push(selectedFilterTags[i][0]);
      }

      for (const i in data) {
        for (const j in filteredKeys) {
          data[i].categories.forEach((element) => {
            if (element === filteredKeys[j]) {
              filteredData.push(data[i]);
            }
          });
          /////// for string instead of array //////
          // if (data[i].categories === filteredKeys[j]) {
          //   filteredData.push(data[i]);
          // }
        }
      }
      return filteredData;
    } else {
      return data;
    }
  }
  const filtered = filterFunc();

  function uniqueData(data) {
    const uniqueFilter = [...new Set(data.map((item) => item.title))];
    const result = [];
    for (const i in uniqueFilter) {
      for (const j in data) {
        if (uniqueFilter[i] === data[j].title) {
          result.push(data[j]);
          break;
        }
      }
    }
    return result;
  }

  return (
    <Container
      contentClosingDelay={contentClosingDelay}
      isNavOpen={isNavOpen}
      onClick={() => setisNavOpen(false)}
    >
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 4 } }}
        exit={{ opacity: 0 }}
      > */}
      <Header>
        <HeaderWrap>
          <h1>Front-end Developer Portfolio</h1>
          <p>Just some of the projects I worked on.</p>
        </HeaderWrap>
      </Header>
      <PortfolioSection>
        <PortfolioWrap>
          <FilterWrap>
            {Object.entries(filter.categories).map(([key, value], index) => {
              return (
                <FilterTag key={key}>
                  <FilterButton
                    style={{
                      backgroundColor: value
                        ? "rgb(226, 120, 108)"
                        : "rgb(32, 46, 84)",
                    }}
                    onClick={() => {
                      if (!index) {
                        setfilter({
                          categories: {
                            all: true,
                            react: false,
                            typescript: false,
                            javascript: false,
                          },
                        });
                      } else {
                        const next = {
                          ...filter.categories,
                          [key]: !value,
                        };
                        setfilter({
                          categories: {
                            ...next,
                            all: Object.values(next).every((x) => !x),
                          },
                        });
                      }
                    }}
                  >
                    {key}
                  </FilterButton>
                </FilterTag>
              );
            })}
          </FilterWrap>
        </PortfolioWrap>
        <PortfolioWorkWrap>
          {uniqueData(filtered).map((item, index) => {
            return (
              <PortfolioCard
                key={index}
                link={"https://www.google.com/"}
                title={item.title}
                description={item.description}
                subtitle={item.techUsed}
                image={item.image}
              />
            );
          })}
        </PortfolioWorkWrap>
        <GetInTouch />
      </PortfolioSection>
      {/* </motion.div> */}
    </Container>
  );
}
