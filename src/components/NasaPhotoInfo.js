import React from 'react'
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  50%{
    transform: scale(0.8);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
`

const StyledInfo = styled.div`
    background-color: ${props => props.theme.cream};
    color: ${props => props.theme.coal};
    transition: all 0.3s ease-in-out;
    transform: scale(2); //start of animation
    opacity: 0; //start of animation
    animation: ${kf} 0.3s ease-in-out forwards;
`
// component that makes a div containing the info related to 
// the photo displayed in NasaPhoto.js
// child component to NasaPhoto

export default function NasaPhoto(props) {
    const { photoObj } = props
    

 return (
     <StyledInfo className='text-container'>
        <p>{photoObj.explanation}</p>
     </StyledInfo>
 )
}