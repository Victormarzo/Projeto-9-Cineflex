import styled from "styled-components"

export default function Infos({title,assentos,date,time,nome,cpf}){
    return(
        <>
            <Info>
                <h1>Filme e sessão</h1>
                <p>{title}</p>
                <p>{date} {time}</p>
            </Info>
            <Info>
                <h1>Ingressos</h1>
                {assentos.map((value,index)=><p key={index}>Assento  {value}</p>)}
            </Info>
            <Info>
                <h1>Comprador</h1>
                <p>Nome:{nome}</p>
                <p>CPF:{cpf}</p>
            </Info>
            <Space></Space>
        </>
    )
}
const Info=styled.div`
    margin-top:20px;
    font-family: 'Roboto';
    font-style: normal;
    letter-spacing: 0.04em;
    color: #293845;
    margin-left:29px;
h1{
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;    
}
p{
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
}

`
const Space=styled.div`
height:60px;`