import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=c4YnxWOAfOecvJbiWkwyaaHCFu3OPcCvkIjKmeYs`)
    .then(res => {
      console.log(res.data);
      setNasaData(res.data);
        })
      }, [])
  return (
    <div className="App">
      <h1>Nasa's Photo of the Day!</h1>
      <img src={nasaData.hdurl} alt={nasaData.explanation}></img>
      <div className="photoLore">
        <h2>{nasaData.title}</h2>
        <p>{nasaData.explanation}</p>
      </div>
      <div className="photoInfo">
        <h4>Additional Information</h4>
        <p>Copyright - {nasaData.copyright}</p>
        <p>Date Taken - {nasaData.date}</p>
      </div>
    </div>
  );
}

export default App;
