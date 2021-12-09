import React from 'react'

//component that makes a footer containing todays date and the 
//credits for the photo and all the other links stacked
export default function NasaPhoto(props) {
    const { photoObj } = props
    console.log(photoObj)

 return (
     <div className='text-container'>
        <h2>Todays date: {photoObj.date}</h2>
        <p>Photo Credits and Source: {photoObj.copyright}</p>
     </div>
 )
}