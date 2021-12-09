import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=c4YnxWOAfOecvJbiWkwyaaHCFu3OPcCvkIjKmeYs`)
    .then(res => {
      console.log(res.data);
      setNasaData(res.data.hdurl)
        })
      })
  return (
    <div className="App">
      <p>Nasa's Photo of the Day!</p>
      <img src={nasaData} alt="Space"></img>
    </div>
  );
}

export default App;
