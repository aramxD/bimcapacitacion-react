import React from "react";
import styled from "styled-components";



const RegistrationForm=({className})=>{

    return(
        <section className={className}>
            <div className="formTitle">
                <h2>
                    Registrate Aqui
                </h2>
            </div>
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
    )
}

export default styled(RegistrationForm)`

display:flex;
flex-direction:column;
align-items:center;

margin:20px auto;
.formTitle{
    text-align:center;
}

.formInput{
    display:flex;
flex-direction:column;
align-items:center;
width:400px;
margin:15px auto;
}
label{
    width:100%;
    font-size:20px;
    margin:0 0 5px 0;
}
input{
    width:100%;
    height:30px;
    padding:5px 10px;
    font-size:20px;
}
button{
    width:100%;
    height:40px;
     
    font-size:20px;
}
`