import React, { useState, useEffect } from 'react'




//component that makes a div containing 
//the photo received from the api
//Child to App.js

export default function NasaPhoto(props) {
    const { photoObj } = props
    const [todaysPic, setTodaysPic] = useState(null);

    useEffect(() => {
        const fetchTodayPic = () => setTodaysPic(photoObj);
        fetchTodayPic();
    }, [photoObj])


 return (
     <div className='photo-container'>
         <img src={todaysPic} alt='astronomy observation of the day'></img>
     </div>
 )
}