import React from "react";
import styled from "styled-components";
import WaveBackground from "./WaveBackground";
import me from "../img/profileImg.png";
function AboutMe() {
  return (
    <>
      {" "}
      <WaveBackground />
      <StyledDiv id="about">
        <StyledSpanName>
          {" "}
          <StyledDivName>
            <h1>Einav</h1>
            <StyledBackName>Einav</StyledBackName>
          </StyledDivName>
          <StyledSpan />
          <StyledDivName>
            <h1>Shpigel</h1>
            <StyledBackName> Shpigel</StyledBackName>
          </StyledDivName>
        </StyledSpanName>
        <StyleContentDiv>
          <StyledImg src={me} alt="me" />
          <p>
            Strong problem-solving skills along with the ability to work
            independently. Highly motivated, a quick learner, and a team player.
            <b> Can do attitude.</b>
          </p>
        </StyleContentDiv>
        <StyledA
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1rK9mz0qoCEeK4b99Vo7RM6c5K7v1bYYF/view?usp=sharing"
        >
          {"{"} My Resume {"}"}
        </StyledA>
      </StyledDiv>
    </>
  );
}
const StyledDiv = styled.div`
  min-height: 85vh;
  width: 80%;
  margin: auto;
  margin-top: 5.3rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    min-height: 90vh;
  }
`;
const StyledSpanName = styled.span`
  margin-top: 1rem;
`;

const StyledDivName = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
`;
const StyledSpan = styled.div`
  display: inline-block;
  width: 20px;
`;

const StyledBackName = styled.h1`
  position: absolute;
  font-family: "Dancing Script", cursive;
  font-size: 7rem;
  left: -6px;
  top: -15px;
  opacity: 0.1;
  @media (max-width: 650px) {
    font-size: 5.7rem;
  }
`;
const StyleContentDiv = styled.div`
  display: flex;
  align-items: center;
  p {
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  width: 17vw;
  margin-right: 1rem;
  @media (max-width: 650px) {
    width: 35vw;
    margin: 0;
  }
`;
const StyledA = styled.a`
  position: relative;

  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 2.4rem;
  color: #b58c8c;
  align-self: center;
  font-family: "Abril Fatface", cursive;
  transition: all 275ms ease;
  &:hover {
    color: #f9e7e7;
  }
  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

export default AboutMe;
