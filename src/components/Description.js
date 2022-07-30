import styled from "styled-components";
export default function Description(){
    
    return(
        <Legenda>
            <div>
            <Caixa><AssentoSelecionado ></AssentoSelecionado ></Caixa>
            <Caixa><p>Selecionado</p></Caixa>
            </div>
            <div>
            <Caixa><AssentoDisponivel ></AssentoDisponivel></Caixa>
            <p>Disponivel</p>
            </div>
            <div>
            <Caixa><AssentoIndisponivel ></AssentoIndisponivel></Caixa>
            <Caixa><p>Indisponivel</p></Caixa>
            </div>
        </Legenda>
    )
}
const AssentoSelecionado=styled.div`
    width: 26px;
    height: 25px;
    left: 57px;
    top: 247px;
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
    border-radius: 12px;
   
`
const AssentoDisponivel=styled.div`
    width: 26px;
    height: 25px;
    left: 57px;
    top: 247px;
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 12px;
   
`
const AssentoIndisponivel=styled.div`
    width: 26px;
    height: 25px;
    left: 57px;
    top: 247px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 12px;
    margin-left: 5px;
   
`
const Legenda=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;

    p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4E5A65;
    text-align: center;
    }
    
`
const Caixa=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`