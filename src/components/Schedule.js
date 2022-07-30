import styled from "styled-components";
import Button from "./Button";

export default function Schedule({weekday,date}){
    return(
        <Container>
            <p>{weekday} - {date}</p>
            <Botoes>
                <Button small="small">15:00</Button>
                <Button small="small">19:00</Button>
            </Botoes>

        </Container>
        
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
`