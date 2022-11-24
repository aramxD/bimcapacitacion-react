import styled from "styled-components";
import CourseInfo from "./pages/CourseInfo";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Alert from "./elements/Alert";
import useAlert from "./hooks/useAlert";
import Graduados from "./components/Graduados";
import {FloatingWhatsApp} from 'react-floating-whatsapp';

//whattsApp Config
import whattsappAvatar from "./assets/img/Logo-BIM-Capacitacion.png";
import Hero from "./components/Hero";
const phoneNumber = "526642171518";
const accountName = "BIMCapacitacion";
const statusMessage = "Tiempo de respuesta: 15 min.";
const chatMessage = "Hola 😃 \n como te puedo ayudar? ";
const className = { "z-index": 1000 };
const allowClickAway = true;

function App() {
  const {alert, setAlert, toogleClose} = useAlert()
  return (
    <>
      <NavBar />
      <Hero/> 
      <Graduados/>
      <Alert  alert={alert} setAlert={setAlert} handleClose={toogleClose}/>
      <CourseInfo setAlert={setAlert}/>
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
