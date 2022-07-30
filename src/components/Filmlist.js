import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Frame from './Frame';
export default function FilmList(){
   const [films,setFilms]=useState([]);
   useEffect(() => {
    const requisition = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

    requisition.then(answer => {
        setFilms(answer.data);
    });
}, []);
   
   
   
    return(
        <List>
            {films.map(value=><Frame
            key={value.id} id={value.id}
            >{value.posterURL}</Frame>)}

        </List> 
    )
}
const List=styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom:10px;
    

`