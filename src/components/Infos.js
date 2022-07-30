import styled from "styled-components"

export default function Infos({title,list,date,hour,nome,cpf}){
    return(
        <>
            <Info>
                <h1>Titulo e sessão</h1>
                <p>{title}</p>
                <p>{date} {hour}</p>
            </Info>
            <Info>
                <h1>Ingressos</h1>
                {list.map(value=><p>Assento {value}</p>)}
            </Info>
            <Info>
                <h1>Comprador</h1>
                <p>Nome:{nome}</p>
                <p>CPF:{cpf}</p>
            </Info>
        </>
    )
}
const Info=styled.div`
margin-top:20px;

`