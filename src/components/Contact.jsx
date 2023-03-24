import React, { useState } from "react";
// import { motion } from "framer-motion";
import styled from "styled-components";

import { Container } from "./Home";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 100vh;
`;

const ContactContent = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;
  padding: 16px 24px;
  h1 {
    font-size: 42px;
  }
`;

const LeftRightWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  flex-basis: 50%;
  width: 50%;
  margin-right: 50px;
  h2 {
    font-size: 28px;
    padding: 30px 0;
  }
  p {
    padding: 5px 0;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  ul li {
    color: rgba(255, 255, 255, 0.7);
    padding: 5px 0;
  }
  ul strong a {
    color: rgb(226, 120, 108);
    transition: color 0.2s ease 0s;
    text-decoration: none;
  }
`;
const Right = styled.div`
  flex-basis: 50%;
  width: 50%;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #3366cc;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  button {
    background-color: #3366cc;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    background-color: #27408b;
  }
`;

const Group = styled.div`
  position: relative;
  label {
    font-size: 14px;
    color: #000;
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: #fff;
    transition: background-color 0.2s ease;
  }
  input,
  textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    outline: 0;
    width: 100%;
    background-color: transparent;
    color: #000;
    font-family: inherit;
  }
  input:focus,
  textarea:focus {
    border-color: #3366cc;
    font-family: inherit;
  }
  input:focus + label,
  textarea:focus + label {
    left: 10px;
    color: #3366cc;
    font-weight: 600;
    font-size: 14px;
  }
  textarea {
    resize: none;
    height: 100px;
  }
`;

export default function Contact({
  isNavOpen,
  setisNavOpen,
  borderedMainContent,
}) {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Container
      borderedMainContent={borderedMainContent}
      isNavOpen={isNavOpen}
      onClick={() => setisNavOpen(false)}
    >
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 4 } }}
        exit={{ opacity: 0 }}
      > */}
      <MainContent>
        <ContactContent>
          <h1>Contact</h1>
          <LeftRightWrap>
            <Left>
              <h2>Where to find me</h2>
              <p>
                Do you have an interesting project I can help with? Feel free to
                reach out to me by using one of the following:
              </p>
              <ul>
                <li>
                  Email{" "}
                  <strong>
                    <a href="">yatsenkoandy97@gmail.com</a>
                  </strong>
                </li>
                <li>
                  LinkedIn{" "}
                  <strong>
                    <a href="">yatsenko-andy</a>
                  </strong>
                </li>
                <li>
                  Github{" "}
                  <strong>
                    <a href="">Andrew-debug</a>
                  </strong>
                </li>
              </ul>
              <p>You can also use the contact form on this page.</p>
            </Left>
            <Right>
              <Card>
                <CardTitle>Leave a message</CardTitle>
                <Form onSubmit={handleSubmit}>
                  <Group>
                    <input
                      placeholder=""
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="name">Name</label>
                  </Group>
                  <Group>
                    <input
                      placeholder=""
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                  </Group>
                  <Group>
                    <textarea
                      placeholder=""
                      name="message"
                      rows="10"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="comment">Message</label>
                  </Group>
                  <button type="submit">Submit</button>
                </Form>
              </Card>
            </Right>
          </LeftRightWrap>
        </ContactContent>
      </MainContent>
      {/* </motion.div> */}
    </Container>
  );
}
