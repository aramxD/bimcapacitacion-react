import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/img/BIM Capacitacion Revit MEP.jpg";

function Hero({ className }) {
  return (
    <header className={className}>
      <HeroContent>
        <HeroText>
          <h1>Curso Revit MEP 2022</h1>
          <p>De cero al Plotter..!!</p>
        </HeroText>
      </HeroContent>
    </header>
  );
}

export default styled(Hero)`
  height: 100%;

  h1 {
    font-size: 40px;
  }
  p {
    font-size: 24px;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 900px) {
    h1 {
    font-size: 30px;
  }
  p {
    font-size: 22px;
    margin: 20px 0 0 0;
  }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 20px;
      margin: 20px 0 0 0;
    }
  }
`;

const HeroContent = styled.div`
  min-height: 500px;
  background-image: url("${backgroundImage}");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
`;

const HeroText = styled.div`
  position: relative;
  bottom: -300px;
  display: block;

  width: 600px;
  color: white;
  text-align: center;
  background-color: RGBA(0, 0, 0, 0.6);
  border-radius: 30px;
  padding: 40px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    width: 450px;
    border-radius: 25px;
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
    border-radius: 20px;
    padding: 20px;
  }
`;
