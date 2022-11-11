import React from "react";
import styled from "styled-components";
import Logo from "../assets/img//Logo-BIM-Capacitacion.png";

const NavBar = ({ className }) => {
  return (
    <nav className={className}>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="enlacesHeader">
        {/* <a href="#">Registra</a> */}
        <a href="https://BIMCapacitacion.com">Inicio</a>
        {/* <a href="#">Tutoriales</a>
        <a href="#">Contacto</a> */}
      </div>
    </nav>
  );
};

export default styled(NavBar)`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
     
  .logo,
  .logo > img {
    height: 100%;
  }
  .enlacesHeader {
    width: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  a{
    text-decoration:none;
    color:black;
    font-weight:600;
  }
`;
