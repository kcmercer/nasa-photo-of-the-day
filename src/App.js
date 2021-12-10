import styled from 'styled-components'
import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

const StyledApp = styled.div`
  background-color: #264653;
`

const StyledImg = styled.img`
  border-radius: 10px;
  border: 2px solid black;
  max-width: 55%;
  height: auto;
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
  text-shadow: 2px 2px black;
`

const StyledH2 = styled.h2`
width: 100%;
font-size: 3rem;
color: #2A9D8F;
text-shadow: 2px 2px black;
margin-top: 2;
margin-bottom: 0;
`

const StyledH4 = styled.h4`
font-size: 1.25rem;
color: #2A9D8F;
text-shadow: 1px 1px black;
`

const StyledP = styled.p`
  font-size: 1.25rem;
  width: 50%;
  color: #E9C46A;
  text-shadow: 1px 1px black;
  padding: 1%;
`

const StyledP2 = styled.p`
  font-size: 1rem;
  color: #E76F51;
  text-shadow: 1px 1px black;
`

const StyledInfo = styled.div`
  display: flex;
  line-height: .5;
  flex-wrap: wrap;
  width: 20%;
  text-align: left;
  margin-top: 10%;
  margin-left: 10%;
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
      <StyledImg src={nasaData.hdurl} alt={nasaData.explanation}></StyledImg>
      <StyledLore>
        <StyledH2>{nasaData.title}</StyledH2>
        <StyledP>{nasaData.explanation}</StyledP>
      </StyledLore>
      <StyledInfo>
        <StyledH4>Additional Information</StyledH4>
        <StyledP2>Copyright - {nasaData.copyright}</StyledP2>
        <StyledP2>Date Taken - {nasaData.date}</StyledP2>
      </StyledInfo>
    </StyledApp>
  );
}

export default App;
