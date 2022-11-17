import React from "react";
import styled from "styled-components";
 

const Alert = ({ className, alert, setAlert, handleClose }) => {
  if (alert && alert?.autoClose) { 
    setTimeout(() => {
        handleClose();
    }, 10000);
  }
  function handleClose(){
    setAlert(alert.active=false)
  }
  return (
    <>
      {alert?.active && (
        <div className={className} style={{backgroundColor: alert.color}}>
          <div className="alertMessage">{alert.message}</div>
          <div className="closeButton">
            <button type="button" onClick={handleClose}>x</button>
          </div>
        </div>
      )}
    </>
  );
};
export default styled(Alert)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100vw;
  z-index: 10;
  text-align: center;
  font-size:25px;
 
  .alertMessage {
    width: 85%;
  }
  .closeButton {
    width: 10%;
  }
  .closeButton>button{
    width:25px;
    font-size:25px;
    font-weight:400;
    background-color:rgba(0,0,0,.01);
    border:none;
  }
  .closeButton>button:hover{
     border:solid 2px black;
    border-radius:5px;
  }
`;
