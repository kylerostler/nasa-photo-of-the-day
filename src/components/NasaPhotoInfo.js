import React from 'react'



// component that makes a div containing the info related to 
// the photo displayed in NasaPhoto.js
// child component to NasaPhoto

export default function NasaPhoto(props) {
    const { photoObj } = props
    

 return (
     <div className='text-container'>
        <p>info: {photoObj.explanation}</p>
     </div>
 )
}