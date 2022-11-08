import React from "react";

import styled from "styled-components";

const TileGallery = ({ className }) => {
  // En esta constante guardo el DIV que contiene la galeria (y sus propiedades)
  const gallery = document.getElementById("gallery");

  window.onmousemove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // aqui obtenemos el factor decimal de [posicion del mouse / ancho de pantalla]
    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth;
    const maxY = gallery.offsetHeight - window.innerHeight;

    // Esta es la posicion teorica en la que deberiamos estar
    const panX = maxX * xDecimal * -1;
    const panY = maxY * yDecimal * -1;

    gallery.animate(
      {
        transform: `translate(${panX}px, ${panY}px)`,
      },
      {
        duration: 4000,
        fill: "forwards",
        easing: "ease",
      }
    );
  };

  return (
    <section className={` ${className}`}>
      <div id="gallery">
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1910&q=80"
            alt=""
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="tile">
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
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80"
            alt=""
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
            alt=""
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt=""
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default styled(TileGallery)`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  margin: 0 auto;
  #gallery {
    height: 130vh;
    width: 130vw;
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

  .tile:hover {
    transform: scale(1.1);
  }
  .tile:hover > img {
    opacity: 1;
    transform: scale(1.02);
  }
  /* PRIMERA FILA */
  .tile:nth-child(1) {
    background-color: rgb(171, 71, 188);
    height: 16%;
    width: 20%;
    left: 5%;
    top: 5%;
  }

  .tile:nth-child(2) {
    background-color: rgb(152, 156, 163);
    height: 22%;
    width: 15%;
    left: 30%;
    top: 4%;
  }

  .tile:nth-child(3) {
    background-color: rgb(116, 71, 188);
    height: 18%;
    width: 20%;
    left: 50%;
    top: 4%;
  }

  .tile:nth-child(4) {
    background-color: rgb(188, 176, 71);
    height: 21%;
    width: 20%;
    left: 75%;
    top: 9%;
  }

  /* SEGUNDA FILA */
  .tile:nth-child(5) {
    background-color: rgb(71, 188, 182);
    height: 18%;
    width: 19%;
    left: 8%;
    top: 24%;
  }

  .tile:nth-child(6) {
    background-color: rgb(147, 188, 71);
    height: 36%;
    width: 38%;
    left: 30%;
    top: 30%;
  }

  .tile:nth-child(7) {
    background-color: rgb(188, 71, 71);
    height: 25%;
    width: 20%;
    left: 72%;
    top: 35%;
  }

  .tile:nth-child(8) {
    background-color: rgb(53, 83, 167);
    height: 23%;
    width: 17%;
    left: 8%;
    top: 46%;
  }

  /* ULTIMA FILA */
  .tile:nth-child(9) {
    background-color: rgb(75, 188, 71);
    height: 19%;
    width: 19%;
    left: 5%;
    top: 74%;
  }
  .tile:nth-child(10) {
    background-color: rgb(222, 106, 125);
    height: 27%;
    width: 18%;
    left: 25%;
    top: 68%;
  }
  .tile:nth-child(11) {
    background-color: rgb(71, 135, 188);
    height: 20%;
    width: 23%;
    left: 45%;
    top: 72%;
  }
  .tile:nth-child(12) {
    background-color: rgb(188, 186, 71);
    height: 25%;
    width: 19%;
    left: 75%;
    top: 70%;
  }
`;
