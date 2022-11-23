import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/img/BIM Capacitacion Revit MEP.jpg";

function Hero({ className }) {
  return (
    <header className={className}>
      <HeroContent >
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

   h1{
    font-size:40px;
   }
   p{
    font-size:24px;
    margin:20px 0 0 0;
   }
`;

const HeroContent = styled.div`
  min-height: 500px;
  background-image: url('${backgroundImage}');
  background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom;
`;

const HeroText= styled.div`
      display: block;
      width:600px;
    right: 30px;
    color: white;
    text-align:center;
    background-color: RGBA(0, 0, 0, .60);
    border-radius: 30px;
    padding: 40px;
    margin:0 auto;
`
