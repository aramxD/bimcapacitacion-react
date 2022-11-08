import React from "react";
import styled from "styled-components";



const Footer=({className})=>{

    return(
        <footer className={className}>
            <div className="imgFooter">
                <img src="" alt="" />
            </div>
            <div className="socialMedia">
                <ul>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>youtube</li>
                </ul>
            </div>
        </footer>
    )
}

export default styled(Footer)`
   
`