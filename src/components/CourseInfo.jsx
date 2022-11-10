import React from "react";
import styled from "styled-components";
import TileGallery from "../elements/TileGallery";

const CourseInfo = ({ className }) => {
  return (
    <section className={className}>
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
        <h2>Contenido</h2>
        <p>Introduccion al mundo BIM</p>
        <p>Instalaciones Mecanicas (HVAC)</p>
        <p>Instalaciones Electricas</p>
        <p>Instalaciones Plomeria (HidroSanitario)</p>
        <p>Cuantificaciones de volumenes de obra</p>
        <p>Preparacion de planos</p>
      </div>
</div>
      <div className="Gallery">
        <TileGallery />
      </div>
    </section>
  );
};

export default styled(CourseInfo)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;

  .Course {
    width: 50%;
    height:450px;
  }
  .Gallery {
    width: 50%;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;

    .Course {
      width: 100%;
       
    }
    .Gallery {
      width: 100%;
    }
  }
`;
