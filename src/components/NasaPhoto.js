import React from 'react'




//component that makes a div containing 
//the photo received from the api
//Child to App.js

export default function NasaPhoto(props) {
    const { photoObj } = props

 return (
     <div className='photo-container'>
        <h1>Astronomy Photo Of The Day: {photoObj.title}</h1>
         <img src={photoObj.url} alt='astronomy observation of the day'></img>
     </div>
 )
}