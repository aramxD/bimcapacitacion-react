import React from "react";
import styled from "styled-components";

import InstElectrica from "../assets/img/IElectrical.jpg";
import IconElectric from "../assets/img/electrical-icon-16.png";
import InstHS from "../assets/img/IsometricoHS.jpg";
import IconHS from "../assets/img/pipe-icon.png";
import InstMech from "../assets/img/IsometricoMECH.jpg";
import IconMech from "../assets/img/hvac-icon.png";

const TileGallery = ({ className }) => {
  return (
    <section className={` ${className}`}>
      <div id="gallery">
        <div className="tile">
          <img src={InstElectrica} alt="" />
          <div className="icon">
            <img src={IconElectric} alt="" />
          </div>
        </div>

        <div className="tile">
          <img src={InstHS} alt="" />
          <div className="icon">
            <img src={IconHS} alt="" />
          </div>
        </div>

        <div className="tile">
          <img src={InstMech} alt="" />
          <div className="icon">
            <img src={IconMech} alt="" />
          </div>
        </div>
        {/* <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
        </div>
         */}
      </div>
    </section>
  );
};

export default styled(TileGallery)`
  display: flex;
  justify-content: center;
  align-content: center;
  height: calc(100vh - 160px);
  /* width:100%; */
  margin: 0 auto;
  /* border: 3px solid black; */
  .icon {
    height: 80%;
    position:relative;
    bottom:90%
  }
  .icon > img {
    height: 100%;
    z-index:1000;
  }
  .icon:hover {
    opacity: 0;
  }
  #gallery {
    height: inherit;
    width: 60%;
    position: absolute;
  }
  .tile {
    border-radius: 1vmax;
    position: absolute;
    text-align: center;
    font-size: 50px;
  }
  .tile > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 800ms ease, transform 800ms ease;
  }

  .tile:hover,
  .tile:focus {
    transform: scale(1.2);
  }
  .tile:hover > img {
    opacity: 1;
    transform: scale(1.02);
  }
  /* PRIMERA FILA */
  .tile:nth-child(1) {
    background-color: rgb(171, 71, 188);
    height: 27%;
    width: 70%;
    left: 18%;
    top: 3%;
  }

  .tile:nth-child(2) {
    background-color: rgb(152, 156, 163);
    height: 30%;
    width: 75%;
    left: 12%;
    top: 35%;
  }

  .tile:nth-child(3) {
    background-color: rgb(71, 188, 116);
    height: 24%;
    width: 76%;
    left: 15%;
    top: 72%;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    #gallery {
      height: inherit;
      width: 100%;
      position: absolute;
    }
    .CourseInfo {
      width: 100%;
    }
    .Gallery {
      width: 100%;
    }
  }
`;
