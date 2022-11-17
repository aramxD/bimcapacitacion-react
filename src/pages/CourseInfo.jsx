import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import TileGallery from "../elements/TileGallery";
import RegistrationForm from '../elements/RegistrationForm'

const CourseInfo = ({ className, setAlert }) => {
  const [showModal, setShowModal] = useState(false)


  return (
    <section className={className}>
      
      <div className="Gallery">
        <TileGallery />
      </div>
      <div className="Course">
        <div className="CourseInfo">
          <h1>Curso Revit MEP</h1>


          <h3>Fechas 📆</h3>
          <p>🟢 Domingo 4 Diciembre 2022</p>
          <p>🟢 Sabado 10 Diciembre 2022</p>
          <p>🟢 Domingo 12 Diciembre 2022</p>
          <h3>Horario 🕐</h3>
          <p>9am - 2pm</p>
          <h3>Ubicacion</h3>
          <p>Coworking Aurora</p>
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
        <button id="registrar" onClick={()=>setShowModal(!showModal)}>Registrarse</button>
      </div>
      <Modal 
        title={'Registro Curso Revit MEP'} 
        showModal={showModal} 
        setShowModal={setShowModal} 
        >
        <RegistrationForm setShowModal={setShowModal} setAlert={setAlert}/>
      </Modal>
      
    </section>
  );
};

export default styled(CourseInfo)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100vw;
  margin: 20px 0 30px 0;
  z-index:1000;
  h1 {
    font-size:30px;
    margin: 0 0 20px 0;
  }
 
  h3 {
    font-size:24px;
    margin: 18px 0 0 0;
    border-bottom:2px solid black;
  }
  p {
    font-size: 16px;
    margin: 5px 0;
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
  /* BoTON */
  #registrar {
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
  #registrar:hover{
    background: #a32424;
  } 
  #registrar:focus, #registrar:active {
    transform:translateY(6px);
    background: #a32424;
     
  box-shadow: 0 5px #666;
   
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
