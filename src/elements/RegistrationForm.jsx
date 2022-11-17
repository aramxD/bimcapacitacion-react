import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useFetchPost } from "../hooks/useFetch";

const RegistrationForm = ({ className, setShowModal, setAlert }) => {
  const [loading, setLoading]=useState(false)
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  
  
  const alertSucces = {
    active: true,
    message: "Registro finalizado",
    type: "success",
    color: '#51e5f8',
    autoClose: false,
  }
  
  
  const submitHandler = (event) => {
    const data = JSON.stringify({
      nombre: nameRef.current.value,
      apeido: lastNameRef.current.value,
      email: emailRef.current.value,
      telefono: phoneRef.current.value,
      evento: "Curso Revit MEP",
    });

    event.preventDefault(); // Se detiene el reinicio 
    setLoading(true) // mostramos loading
    const url =
      "https://p01--restapi--qzvdk8qp7kvm.code.run/bimcapacitacion/api/v1/registration";
    useFetchPost(url, data); // Se envia formulario
    setShowModal(false)
    setAlert(alertSucces); // Se inicia la alerta
    setLoading(false) // regresa el formulario
  };

  return (
    <section className={className}>
      {loading && <p>loading...</p>}
      {!loading && 
      <div className="formContent">
      <form onSubmit={submitHandler}>
        <div className="formInput">
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Nombre"
            ref={nameRef}
          />
        </div>
        <div className="formInput">
          <label htmlFor="lastName">Apeido:</label>
          <input
            id="lastName"
            type="text"
            required
            placeholder="Apeido"
            ref={lastNameRef}
          />
        </div>
        <div className="formInput">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Correo electronico"
            ref={emailRef}
          />
        </div>
        <div className="formInput">
          <label htmlFor="phone">Tel.:</label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="Numero de contacto"
            ref={phoneRef}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          />
        </div>
        <button>Registrar</button>
      </form>
    </div>}
      
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
