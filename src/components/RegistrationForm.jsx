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
                    <label htmlFor="">Nombre</label>
                    <input type="text" />
                    </div>
                    <div className="formInput">
                    <label htmlFor="">Apeido</label>
                    <input type="text" />
                    </div>
                    <div className="formInput">
                    <label htmlFor="">Email</label>
                    <input type="email" />
                    </div>
                    <div className="formInput">
                    <label htmlFor="">Tel.</label>
                    <input type="number" />
                    </div>
                    <button>Registrar</button>
                </form>
            </div>


        </section>
    )
}

export default styled(RegistrationForm)`
   
`