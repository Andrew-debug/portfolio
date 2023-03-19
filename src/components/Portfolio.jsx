import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../assets/data/portfolioData.js";

const Container = styled.div``;

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

export default function Portfolio() {
  const [filter, setfilter] = useState({
    categories: {
      all: true,
      react: false,
      typescript: false,
      javascript: false,
    },
  });

  useEffect(() => {
    if (Object.values(filter.categories).indexOf(true) === -1) {
      setfilter({
        categories: {
          all: true,
          react: false,
          typescript: false,
          javascript: false,
        },
      });
    }
  }, [filter]);

  function filterFunc() {
    const selectedFilterTags = Object.entries(filter.categories).filter(
      ([key, value]) => value !== false
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
    <Container>
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
                        setfilter({
                          categories: {
                            ...filter.categories,
                            all: false,
                            [key]: !value,
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
              <PortfolioWork key={index}>
                <a href="https://www.google.com/">
                  <img src={item.image} alt={item.title} />
                </a>
              </PortfolioWork>
            );
          })}
        </PortfolioWorkWrap>
      </PortfolioSection>
    </Container>
  );
}
