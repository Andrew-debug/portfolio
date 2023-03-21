import React from "react";
import styled from "styled-components";
import "./contact.css";

const Container = styled.div`
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
`;

const LeftRightWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -16px;
  margin-right: -16px;
`;
const Left = styled.div`
  flex-basis: 50%;
  width: 50%;
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
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

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {};
  return (
    <Container>
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
            <div className="card">
              <span className="title">Leave a Comment</span>
              <form className="form" onSubmit={handleSubmit}>
                <div className="group">
                  <input placeholder="" type="text" onChange={handleChange} />
                  <label for="name">Name</label>
                </div>
                <div className="group">
                  <input placeholder="" type="email" id="email" name="email" />
                  <label for="email">Email</label>
                </div>
                <div className="group">
                  <textarea
                    placeholder=""
                    id="comment"
                    name="comment"
                    rows="10"
                  ></textarea>
                  <label for="comment">Message</label>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </Right>
        </LeftRightWrap>
      </ContactContent>
    </Container>
  );
}
