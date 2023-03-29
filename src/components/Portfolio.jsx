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
const PortfolioSection = styled.div`
  min-height: 500px;
`;

const PortfolioWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 12px auto;
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
  margin: 12px auto;
  padding: 0px 24px;
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

export default function Portfolio({}) {
  const [filter, setfilter] = useState({
    all: true,
    react: false,
    typescript: false,
    javascript: false,
  });

  const filtersOn = Object.keys(filter).filter((key) => filter[key] !== false);

  function filteredData() {
    const dataItemCategories = [];
    for (const i in data) {
      dataItemCategories.push(data[i].categories);
    }

    const copiedData = [...data];
    const newData = [];
    if (filtersOn.length > 1) {
      for (const i in dataItemCategories) {
        if (_.isEqual(_.sortBy(filtersOn), _.sortBy(dataItemCategories[i]))) {
          newData.push(data[i]);
        }
      }
      return newData;
    } else if (filtersOn.length === 1 && filtersOn[0] !== "all") {
      const copiedData = data.filter((item) =>
        item.categories.includes(filtersOn[0])
      );
      return copiedData;
    }
    return copiedData;
  }

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
        </PortfolioWrap>
        <PortfolioWorkWrap>
          {filteredData().length > 0 ? (
            <>
              {filteredData().map((item, index) => {
                return (
                  <PortfolioCard
                    key={index}
                    id={item.id}
                    link={"https://www.google.com/"}
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
      </PortfolioSection>
      <GetInTouch />
    </>
  );
}
