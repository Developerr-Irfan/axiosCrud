import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../component/UI/Card';

export default function Movie() {
  const [movieData, setMovieData] = useState(null);
  const API = "https://www.omdbapi.com/?i=tt3896198&apikey=3b626798";
  const getMovieData = async ()=>{
    try {
        const res = await axios.get(API);
        setMovieData(res.data.search);
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    getMovieData();
  },[]);
    return (
    <div>
      <ul>
        {
            movieData && movieData.map((ele)=>{
                return <Card key={ele.imdbID} movie={ele} />
            })
        }
      </ul>
    </div>
  )
}


