import React, { useState } from "react";
import styled from "styled-components";
import Button from "../assets/buttons/HomeButton";
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
  padding: 0 16px;
  flex-basis: 50%;
  width: 50%;
`;

const Form = styled.form`
  position: relative;
`;
const FormContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-right: 0px;
`;
const Group = styled.div`
  margin-top: 10px;
  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    display: block;
    padding: 12px;
    width: 100%;
    margin: 5px 0 0;
    background: rgb(28, 40, 73);
    color: rgb(255, 255, 255);
    border: 2px solid rgba(255, 255, 255, 0.25);
    transition: background 0.3s ease 0s, border 0.3s ease 0s;
  }
  textarea {
    display: block;
    padding: 12px;
    margin: 5px 0 0;
    background: rgb(28, 40, 73);
    color: rgb(255, 255, 255);
    border: 2px solid rgba(255, 255, 255, 0.25);
    transition: background 0.3s ease 0s, border 0.3s ease 0s;
    width: 100% !important;
  }
  input:focus,
  textarea:focus {
    outline: none;
    background: rgb(36, 52, 95);
    border-color: rgb(226, 120, 108);
  }
  input::placeholder,
  textarea::placeholder {
    font-size: 16px;
    font-weight: 400;
    font-family: "Raleway", sans-serif;
    color: rgba(255, 255, 255, 0.7);
  }
`;
export default function Contact() {
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
            <h2>Contact Form</h2>
            <Form onSubmit={handleSubmit}>
              <FormContentWrap>
                <Group>
                  <label htmlFor="name"></label>
                  <span>Full name</span>
                  <input
                    placeholder="Enter your full name..."
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Group>
                <Group>
                  <label htmlFor="name"></label>
                  <span>Email</span>
                  <input
                    placeholder="Enter your email..."
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Group>
                <Group>
                  <label htmlFor="name"></label>
                  <span>Message</span>
                  <textarea
                    placeholder="Enter your full name..."
                    name="message"
                    rows="10"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </Group>
                <Button
                  type="submit"
                  text="Submit"
                  margin="15px 0 0"
                  width="200"
                />
              </FormContentWrap>
            </Form>
          </Right>
        </LeftRightWrap>
      </ContactContent>
    </MainContent>
  );
}
