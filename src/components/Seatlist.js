import Title from "./Title"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "./Footer";
import Seat from "./Seat";
import Description from "./Description";
import styled from "styled-components";
import Button from "./Button"


export default function Seatlist(){
    const [time,setTime]=useState([]);
    const [films,setFilms]=useState([]);
    const [days,setDays]=useState([]);
    const [seats,setSeats]=useState([]);
    useEffect(() => {
     const requisition = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/showtimes/2/seats");
 
     requisition.then(answer => {
         setTime(answer.data);
         setFilms(answer.data.movie);
         setDays(answer.data.day);
         setSeats(answer.data.seats)
     });
 }, []);
    

    return(
       <>
        <Title>Selecione o(s) assento(s)</Title>
        
        <Cinema>{seats.map(value=><Seat avaliable={value.isAvailable}>{value.name}</Seat>)}</Cinema>
        <Description></Description>
        
        <Button>Reservar assento(s)</Button>
        <Footer time={time.name} weekday={days.weekday} image={films.posterURL} title={films.title}></Footer>
        </>
    )
}
const Cinema=styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 12.5px;
    padding-left: 12.5px;
`