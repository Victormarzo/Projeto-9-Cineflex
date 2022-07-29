import styled from "styled-components";
export default function Title({children,color,weight}){
    return(
        <Titulo color={color} weight={weight}>
            {children}
        </Titulo>
    )
}
const Titulo=styled.div`
    margin-top:67px;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: ${(props) => props.weigth ? props.weigth :" 400"};
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.color ? props.color :" #293845"};
`