import React from 'react'
import styled, { keyframes } from 'styled-components';


const kf = keyframes`
  100%{
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledPhoto = styled.div`
    background-color: ${props => props.theme.lilac};
    color: ${props => props.theme.coal};
    border: 2px solid ${props => props.theme.rust};
    img {
    opacity: 0;
    transform: scale(2) rotateZ(180deg);
    animation: ${kf} 0.5s ease-in-out forwards;
    }
`
//component that makes a div containing 
//the photo received from the api
//Child to App.js

export default function NasaPhoto(props) {
    const { photoObj } = props

 return (
     <StyledPhoto className='photo-container'>
        <h1>Astronomy Photo Of The Day: {photoObj.title}</h1>
         <img src={photoObj.url} alt='astronomy observation of the day'></img>
     </StyledPhoto>
 )
}