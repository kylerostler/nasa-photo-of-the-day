import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

import NasaPhoto from "./components/NasaPhoto";
import NasaPhotoInfo from './components/NasaPhotoInfo';
import NasaDateCopyright from './components/NasaDateCopyright.js';

import { BASE_URL } from './constants';
import { API_KEY } from './constants';



function App() {
  const [photoData, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhoto = () => {Axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(response => {
        setPhoto(response.data)
      })
      .catch(error => {
        debugger
        console.error(error)
      })
    }
    fetchPhoto();
  }, []);




  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaPhoto photoObj={photoData}/>
      <NasaPhotoInfo photoObj={photoData}/>
      <NasaDateCopyright photoObj={photoData}/>
    </div>
  );
}

export default App;
