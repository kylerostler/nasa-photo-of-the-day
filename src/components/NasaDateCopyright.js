import React from 'react'
import styled from 'styled-components';

const styledCredits = styled.div`
    

`

//component that makes a footer containing todays date and the 
//credits for the photo and all the other links stacked
export default function NasaPhoto(props) {
    const { photoObj } = props

 return (
     <div className='text-container'>
        <h2>{photoObj.date}</h2>
        <p>Photo Credits: {photoObj.copyright}</p>
     </div>
 )
}