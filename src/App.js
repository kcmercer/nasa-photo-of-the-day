import styled from 'styled-components'
import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

const StyledApp = styled.div`
  background-color: #264653;
`
const StyledLore = styled.div`
  font-family: 'Times New Roman';
  word-spacing: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

const StyledH1 = styled.h1`
  padding-top: 1%;
  font-family: 'Times New Roman';
  color: #2A9D8F;
`

const StyledH2 = styled.h2`
width: 100%;
font-size: 3rem;
color: #2A9D8F;
margin-top: 2;
margin-bottom: 0;
`

const StyledP = styled.p`
  font-size: 1.25rem;
  width: 50%;
  color: #E9C46A;
  padding: 1%;
  border: 2px black solid;
  border-radius: 5px;
`

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
    <StyledApp className="App">
      <StyledH1>Nasa's Photo of the Day!</StyledH1>
      <img src={nasaData.hdurl} alt={nasaData.explanation}></img>
      <StyledLore>
        <StyledH2>{nasaData.title}</StyledH2>
        <StyledP>{nasaData.explanation}</StyledP>
      </StyledLore>
      <div className="photoInfo">
        <h4>Additional Information</h4>
        <p>Copyright - {nasaData.copyright}</p>
        <p>Date Taken - {nasaData.date}</p>
      </div>
    </StyledApp>
  );
}

export default App;
