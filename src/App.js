import React, { useState } from "react";
import "./App.css";

import { BASE_URL } from './constants';
import { API_KEY } from './constants';



function App() {
  const [photo, setPhoto] = useState([]);
  const [currentPicId, setCurrentPicId] = useState(null);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
