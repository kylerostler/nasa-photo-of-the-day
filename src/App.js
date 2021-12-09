import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

import NasaPhoto from "./components/NasaPhoto";

import { BASE_URL } from './constants';
import { API_KEY } from './constants';

// import NasaDateCopyright from './components/NasaDateCopyright.js';
// import NasaPhotoInfo from './components/NasaPhotoInfo';

function App() {
  const [photo, setPhoto] = useState(null);
  const [currentPicId, setCurrentPicId] = useState(null);

  useEffect(() => {
    const fetchPhoto = () => {Axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(response => {
        setPhoto(response.data)
      })
      .catch(error => {
        console.error(error)
      })
    }
    fetchPhoto();
  }, []);

console.log(photo)




  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaPhoto photoObj={photo}/>
    </div>
  );
}

export default App;
