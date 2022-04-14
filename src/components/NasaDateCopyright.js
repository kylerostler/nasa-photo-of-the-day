import React from 'react'
import styled from 'styled-components';


const StyledCredits = styled.div`
    background-color: ${props => props.theme.lilac};
    color: ${props => props.theme.coal};
    border: 2px solid ${props => props.theme.rust};
`

//component that makes a footer containing todays date and the 
//credits for the photo and all the other links stacked
export default function NasaPhoto(props) {
    const { photoObj } = props

 return (
     <StyledCredits className='text-container'>
        <h2>{photoObj.date}</h2>
        <p>Photo Credits: {photoObj.copyright}</p>
     </StyledCredits>
 )
}