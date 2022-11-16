import styled from "styled-components";
import CourseInfo from "./pages/CourseInfo";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {FloatingWhatsApp} from 'react-floating-whatsapp';

//whattsApp Config
import whattsappAvatar from "./assets/img/Logo-BIM-Capacitacion.png";
const phoneNumber = "526642171518";
const accountName = "BIMCapacitacion";
const statusMessage = "Tiempo de respuesta: 15 min.";
const chatMessage = "Hola 😃 \n como te puedo ayudar? ";
const className = { "z-index": 1000 };
const allowClickAway = true;

function App() {
  return (
    <>
      <NavBar />

      <CourseInfo />
      <FloatingWhatsApp
        phoneNumber={phoneNumber}
        accountName={accountName}
        avatar={whattsappAvatar}
        statusMessage={statusMessage}
        chatMessage={chatMessage}
        allowClickAway={allowClickAway}
        className={className}
      />
      <Footer />
    </>
  );
}

export default styled(App)``;
