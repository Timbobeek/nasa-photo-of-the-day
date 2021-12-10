import React, { useState, useEffect } from "react";
import "./App.css";
import Apod from './Apod';
import Date from './Date';
import axios from 'axios';
import { BASE_URL, API_KEY } from './urlstuff';

// const data = {
//   copyright: "Col Druscie Obs.AAC",
//   date: "2021-12-08",
//   explanation:
//     "Comet Hale-Bopp, the Great Comet of 1997, became much brighter than any surrounding stars. It was seen even over bright city lights. Away from city lights, however, it put on quite a spectacular show. Here Comet Hale-Bopp was photographed above Val Parola Pass in the Dolomite mountains surrounding Cortina d'Ampezzo, Italy. Comet Hale-Bopp's blue ion tail, consisting of ions from the comet's nucleus, is pushed out by the solar wind. The white dust tail is composed of larger particles of dust from the nucleus driven by the pressure of sunlight, that orbit behind the comet. Comet Hale-Bopp (C/1995 O1) remained visible to the unaided eye for 18 months -- longer than any other comet in recorded history. The large comet is next expected to return around the year 4385.  This month, Comet Leonard is brightening and may soon become visible to the unaided eye.",
//   hdurl: "https://apod.nasa.gov/apod/image/2112/halebopp_dimai_960.jpg",
//   media_type: "image",
//   service_version: "v1",
//   title: "Comet Hale-Bopp Over Val Parola Pass",
//   url: "https://apod.nasa.gov/apod/image/2112/halebopp_dimai_960.jpg",
// };

function App() {
  const [apod, setApod] = useState({})
  const [date, setDate] = useState('')

  useEffect(()=>{
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then(res=>{
        console.log('res.data', res.data);
        // setApod({apod: res.data, date: res.data.date})
        setApod(res.data)
        setDate(res.data.date)
      })
      .catch(err =>{
        console.log(err)
      })
    
  },[]);

  return (
    <div className ='App'>
        <Date date={date} />
        <Apod title={apod.title} image={apod.url} altImage={apod.title} description={apod.explanation} />
    </div>
  );
}

export default App;
