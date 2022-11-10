import React from "react";
import styled from "styled-components";

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="imgFooter">
        <img src="" alt="" />
      </div>
      <div className="social-media">
         
        
        <a
          href="https://www.youtube.com/c/BIMCapacitacion"
          target="_blank"
          className="social-media-icon"
        >
          <i className="bx bxl-youtube"></i>
        </a>
        <a
          href="https://www.facebook.com/BIMCapacitacion"
          target="_blank"
          className="social-media-icon"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/bim.capacitacion/"
          target="_blank"
          className="social-media-icon"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://www.wa.link/mqz551"
          target="_blank"
          className="social-media-icon"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
};

export default styled(Footer)`
  display:flex;
  align-items: center;
  position: fixed;

  left: 0;
  bottom: 0;
  width: 100%;
  height:80px;
  box-shadow: rgb(149 157 165 / 20%) 10px 8px 14px 12px;
  /* background-color: #aaaaaa; */
  

.social-media {
    display: flex;
    justify-content: flex-start;
    justify-content: space-evenly;
    /* padding-top: 30px; */
    margin: 0 auto;
    width: 50%;
  }

  .social-media-icon {
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 50%;
    text-align: center;
    color: rgb(0, 0, 0);
  }

  .social-media-icon:hover {
    background: white;
    color: #4e66f8;
    border: 2px solid #4e66f8;
  }

  .social-media-icon i {
    font-size: 30px;
    line-height: 60px;
  }
`;
