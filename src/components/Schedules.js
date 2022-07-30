import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "./Footer";
import Title from "./Title";
import { useParams,Link } from "react-router-dom";
import styled from "styled-components";
import Button from './Button';


export default function Schedules(){
    const [time,setTime]=useState([]);
    const [films,setFilms]=useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        const link=`https://mock-api.driven.com.br/api/v7/cineflex/movies/${ movieId }/showtimes`;
        const requisition = axios.get(link);
 
     requisition.then(answer => {
         setTime(answer.data.days);
         setFilms(answer.data)
     });
 }, [movieId]);
    


    return(
        <>
        <Title>Selecione o horário</Title>
        {time.map(value=>
        <Container key={value.id} >
            <p>{value.weekday} - {value.date}</p> 
            <Botoes>
                {value.showtimes.map(( valor)=>(
                <Link key={valor.id} to={`/sessao/${valor.id}`} >
                <Button  small={"small"}>{valor.name}</Button>
                </Link>  ))}
            </Botoes>
        </Container>)}
        <Footer image={films.posterURL} title={films.title}></Footer>
        </>
    )
}
const Botoes=styled.div`
    display: flex;
    align-items: center;
    margin-top:25px;
    margin-bottom:25px;
`
const Container=styled.div`
        
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
    margin-left:25px;
    a{text-decoration:none}
`