import styled from "styled-components";
import Frame from "./Frame";

export default function Footer({title,image,weekday,time}){
    return(
        <Container >
            <Frame small="small">{image}</Frame>
            <div>
            <Titulo>{title}</Titulo>
            <Titulo>{weekday} - {time}</Titulo>
            </div>
        </Container>
    )
}
const Container=styled.div`
    
    height: 110px;
    bottom: 0;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
`
const Titulo=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 30px;
color: #293845;
margin-left:15px;
`