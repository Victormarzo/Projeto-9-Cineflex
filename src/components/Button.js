import styled from "styled-components"
export default function Button({children,small}){

    return(
        <Botao small={small}>{children}</Botao>
    )
}
const Botao=styled.button`
width: ${(props) => props.small ? "83px":" 225px"};
height: 43px;
background-color: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;
color: #FFFFFF;
margin-right: 10px;
margin: ${(props) => props.small ? "":" auto"};
border:0;

`