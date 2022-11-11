import React from "react";
import styled from "styled-components";
import TileGallery from "../elements/TileGallery";

const CourseInfo = ({ className }) => {
  return (
    <section className={className}>
      <div className="Gallery">
        <TileGallery />
      </div>
      <div className="Course">
        <div className="CourseInfo">
          <h1>Curso Revit MEP</h1>

          <h3>Horario 🕐</h3>
          <p>9am - 2pm</p>

          <h3>Fechas 📆</h3>
          <p>🟢 Domingo 4 Diciembre 2022</p>
          <p>🟢 Sabado 10 Diciembre 2022</p>
          <p>🟢 Domingo 12 Diciembre 2022</p>
        </div>
        <div className="courseData">
          <h3>Contenido</h3>
          <li>Introduccion al mundo BIM</li>
          <li>Instalaciones Mecanicas (HVAC)</li>
          <li>Instalaciones Electricas</li>
          <li>Instalaciones Plomeria (HS)</li>
          <li>Cuantificaciones de obra</li>
          <li>Preparacion de planos</li>
        </div>
        <button >Registrarse</button>
      </div>
      
      
    </section>
  );
};

export default styled(CourseInfo)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100vw;
  margin: 0 0 30px 0;
  z-index:1000;
  h1 {
    font-size:30px;
    margin: 0 0 20px 0;
  }
  h2 {
    font-size:26px;
    margin: 20px 0 0 0;
  }
  h3 {
    margin: 24px 0 0 0;
    border-bottom:2px solid black;
  }
  p {
    font-size: 18px;
    margin: 5px 0;
  }
  button{
    margin:20px 0;
    padding:10px 15px;
    width:100%;
    font-size:24px;
    background: #ce2c2c;
    color:white;
    border:none;
    border-radius:10px;
    box-shadow: 0 9px #999;
  }
  button:hover{
    background: #a32424;
  } 
  button:focus, button:active {
    transform:translateY(6px);
    background: #a32424;
     
  box-shadow: 0 5px #666;
   
  }
  .Course {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 45%;
    height: 100%;
    margin: 0 auto;
    margin: 0 0 0 50px;
  }
  .CourseInfo {
    width: 70%;
    margin: 0 30px;
  }

  .courseData {
    width: 70%;
    margin: 0 30px;
  }
  .Gallery {
    width: 55%;
  }
  
  @media screen and (max-width: 900px) {
     

    .Course {
      width: 40%;
    }
    .Gallery {
      width: 60%;
    }
    .CourseInfo, .courseData {
    width: 100%;
    margin: 0 30px;
  }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    .Course {
      width: 80%;
      margin: 0 auto;  
    }
    .Gallery {
      width: 100%;
    }
  }
`;
