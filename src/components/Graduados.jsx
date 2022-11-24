import React from "react";
import styled from "styled-components";
import ImageCard from "../elements/ImageCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import grupo1 from "../assets/img/FotosGraduados/18527303_2009517282611455_4572360308441875661_o.jpg";
import grupo2 from "../assets/img/FotosGraduados/20229699_2045108362385680_7860913222576269234_o.jpg";
import grupo3 from "../assets/img/FotosGraduados/20248501_2044695105760339_80866802375890745_o.jpg";
import grupo4 from "../assets/img/FotosGraduados/21949959_2074746899421826_3050276903446186772_o.jpg";
import grupo5 from "../assets/img/FotosGraduados/27067293_2133070823589433_364944430914976481_n.jpg";
import grupo6 from "../assets/img/FotosGraduados/29542862_2161179670778548_8433403115855577007_n.jpg";
import grupo7 from "../assets/img/FotosGraduados/DSC_0234.jpg"; 
import grupo8 from "../assets/img/FotosGraduados/DSC_0247.jpg";
import grupo9 from "../assets/img/FotosGraduados/DSC_0268.jpg";
import grupo10 from "../assets/img/FotosGraduados/DSC_0657.jpg";
import grupo12 from "../assets/img/FotosGraduados/DSC_0765.jpg";
import grupo13 from "../assets/img/FotosGraduados/DSC_1064.jpg";
import grupo14 from "../assets/img/FotosGraduados/DSC_1249.jpg";
import grupo15 from "../assets/img/FotosGraduados/DSC_1350.jpg";
import grupo16 from "../assets/img/FotosGraduados/IMG_20220826_180101.jpg";
import grupo17 from "../assets/img/FotosGraduados/WhatsApp Image 2022-11-23 at 11.42.54 AM.jpeg";

const fotosGrupo = [
  grupo1,
  grupo2,
  grupo3,
  grupo4,
  grupo5,
  grupo6,
  grupo7,
  grupo8,
  grupo9,
  grupo10,
  grupo12,
  grupo13,
  grupo14,
  grupo15,
  grupo16,
  grupo17,
];

function Graduados({ className }) {
  return (
    <>
      <section className={className}>
        <div className="graduadosPhotos">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1.5}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {fotosGrupo.map((card) => {
              // console.log(card)
              return (
                <SwiperSlide key={card}>
                  <ImageCard image={card} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="grduadosText">
          <h2> Se parte de la siguiente Generacion</h2>
          <p>
            Antes de tomar el curso debes saber que{" "}
            <b> nuestros cursos son 100% practicos,</b> necesitaras tu
            computadora para practicar y ganas de aprender.
          </p>
          <p>
            <b> Este es un curso "de cero al plotter'</b>, iniciamos con las
            bases de modelado y paso a paso terminamos generando planos para
            plottear
          </p>
          <p>
            <b> Quienes pueden tomar este curso?</b> Todas las personas que
            trabajen en la industria de la construccion y esten relacionados a
            la elaboracion de planos, ya sean tecnicos, arquitectos o ingenieros
          </p>
        </div>
      </section>
    </>
  );
}

export default styled(Graduados)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 400px;
  margin: 40px 0;
  .graduadosPhotos {
    width: 50%;
    margin: 0 20px;
  }
  .grduadosText {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    height: 100%;
    margin: 0 40px;
    text-align: center;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
     height:100%;
    .graduadosPhotos {
      width: 100%;
      
    }
    .grduadosText {
       
      width: 100%;
      height: 100%;
      margin: 0 20px 20px 20px;
      text-align: center;

      h2, p{
        margin: 0 0 20px 0;
      }
    }
  }

  /* @media screen and (max-width: 600px) {
     
    flex-direction: column-reverse;
     height:100%;
    .graduadosPhotos {
      width: 100%;
      
    }
    .grduadosText {
       
      width: 100%;
      height: 100%;
      margin: 0 0 20px 0;
      text-align: center;

      h2, p{
        margin: 0 0 20px 0;
      }
    }
  } */
`;
