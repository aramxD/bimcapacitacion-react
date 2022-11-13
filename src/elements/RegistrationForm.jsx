import React from "react";
import styled from "styled-components";

const RegistrationForm = ({ className }) => {
  return (
    <section className={className}>
      <div className="formContent">
        <form action="">
          <div className="formInput">
            <label htmlFor="">Nombre:</label>
            <input type="text" />
          </div>
          <div className="formInput">
            <label htmlFor="">Apeido:</label>
            <input type="text" />
          </div>
          <div className="formInput">
            <label htmlFor="">Email:</label>
            <input type="email" />
          </div>
          <div className="formInput">
            <label htmlFor="">Tel.:</label>
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
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
