import styled from "styled-components"
import CourseInfo from "./components/CourseInfo"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import RegistrationForm from "./elements/RegistrationForm"
import TileGallery from './elements/TileGallery'
 

function App() {
  

  return (
    <>
      <NavBar/>
      
      {/* <RegistrationForm/> */}
      <CourseInfo/>

      <Footer/>
    </>
  )
}

export default styled(App)``
