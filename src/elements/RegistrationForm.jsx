import React, {useRef } from "react";
import styled from "styled-components";

const RegistrationForm = ({ className }) => {
const nameRef = useRef()
const emailRef = useRef()
const phoneRef = useRef()


const submitHandler =(event)=>{
  event.preventDefault()
  const data = {
    "nombre": nameRef.current.value,
    "email": emailRef.current.value,
    "telefono": phoneRef.current.value,
    "evento": "Curso Revit MEP"
}

// var formdata = new FormData();
// formdata.append("nombre", "test");
// formdata.append("email", "test@test.com");
// formdata.append("telefono", "6643563487");
// formdata.append("evento", "Curso Revit MEP");

var requestOptions = {
  method: 'POST',
  body: data,
  redirect: 'follow'
};

fetch("https://p01--restapi--qzvdk8qp7kvm.code.run/api/v1/bimc/registration", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


   
}

  return (
    <section className={className}>
      <div className="formContent">
        <form onSubmit={submitHandler}>
          <div className="formInput">
            <label htmlFor="name">Nombre Completo:</label>
            <input 
            id="name"
            type="text"
            required
            placeholder="Nombre - Apeido"
            ref={nameRef}
             />
          </div>
          {/* <div className="formInput">
            <label htmlFor="">Apeido:</label>
            <input type="text" />
          </div> */}
          <div className="formInput">
            <label htmlFor="email">Email:</label>
            <input 
            id="email"
            type="email"
            required
            placeholder="Correo electronico"
            ref={emailRef} />
          </div>
          <div className="formInput">
            <label htmlFor="phone">Tel.:</label>
            <input 
            id="phone"
            type="tel" 
            
            required
            placeholder="Numero de contacto"
            ref={phoneRef}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
          </div>
          <button>Registrar</button>
        </form>
      </div>
    </section>
  );
};

export default styled(RegistrationForm)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 0 20px 0;

  .formInput {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 15px auto;
  }
  label {
    width: 100%;
    font-size: 20px;
    margin: 0 0 5px 0;
  }
  input {
    width: 100%;
    height: 30px;
    padding: 5px 10px;
    font-size: 20px;
  }
  button {
    width: 100%;
    height: 40px;

    font-size: 20px;
  }
`;
