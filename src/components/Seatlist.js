import Title from "./Title"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "./Footer";
import Seat from "./Seat";
import Description from "./Description";
import styled from "styled-components";
import Button from "./Button"
import Buy from "./Buy";
import { useParams,Link,useNavigate } from "react-router-dom";



export default function Seatlist({ids,setInformacao,assentos,setAssentos,setIds}){
    const [time,setTime]=useState([]);
    const [films,setFilms]=useState([]);
    const [days,setDays]=useState([]);
    const [seats,setSeats]=useState([]);
    const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
    const { seatId } = useParams();
    const navigate = useNavigate()
    
    

    useEffect(() => {

     const link=`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${seatId}/seats`;
     const requisition = axios.get(link);
     requisition.then(answer => {
         setTime(answer.data);
         setFilms(answer.data.movie);
         setDays(answer.data.day);
         setSeats(answer.data.seats)
         setInformacao([])
         setIds([])
         setAssentos([])

         
     });
 }, [seatId]);
    
    function finishBuy(e){
        e.preventDefault();
        let pedido ={ ids,name:nome,cpf};
        let dadosFinais={
            nome:nome,
            cpf:cpf,
            time:time.name ,
            title:films.title,
            date:days.date,
            assentos:assentos
    
        }
        
       if(assentos.length!=0){ 
        console.log(dadosFinais)
        setInformacao({...dadosFinais});
       
        const request = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', pedido)
        request.then(() => {
            navigate("/sucesso");

    })}else{
        alert("Selecione um assento")
    }
    }
        

    return(
       <>
        <Title>Selecione o(s) assento(s)</Title>
        
        <Cinema>{seats.map(value=><Seat ids={ids} setAssentos={setAssentos} assentos={assentos} 
        setIds={setIds} key={value.id} id={value.id} poltrona={value.name}
        avaliable={value.isAvailable}>{value.name}  </Seat>)}</Cinema>
        <Description></Description>
        <Buy 
        nome={nome}
        setCpf={setCpf} 
        setNome={setNome} 
        cpf={cpf} 
        finishBuy={finishBuy}
        ></Buy>
        
        <Footer 
        time={time.name} 
        weekday={days.weekday} 
        image={films.posterURL} 
        title={films.title}></Footer>
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