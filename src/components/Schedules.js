import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "./Footer";
import Schedule from "./Schedule";
import Title from "./Title";



export default function Schedules(){
    const [time,setTime]=useState([]);
    const [films,setFilms]=useState([]);
    useEffect(() => {
     const requisition = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies/1/showtimes");
 
     requisition.then(answer => {
         setTime(answer.data.days);
         setFilms(answer.data)
     });
 }, []);
    


    return(
        <>
        
        <Title>Selecione o horário</Title>
        {time.map(value=><Schedule weekday={value.weekday} date={value.date}/>)}
        <Footer image={films.posterURL} title={films.title}></Footer>
        </>
    )
}
