import React from 'react'
import styled from 'styled-components'

function ImageCard({className, image}) {
  return (
    <article className={className}>

        <img src={image} alt="" />
    </article>
  )
}


export default styled(ImageCard)`
height:300px;
width:100%;


background-color:#afafaf57;
border: solid 2px #000000;
padding: 20px;
border-radius:20px;

img{
    width:100%;
    border-radius:20px;
    height:100%;
    object-fit:cover;
}

`
