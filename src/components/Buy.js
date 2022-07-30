import styled from "styled-components";
import Button from "./Button";
export default function Buy({nome,cpf,setNome,setCpf,finishBuy}){
    
    return(
        <Form onSubmit={finishBuy}>
		  <p>Nome do comprador</p>
          <input 
          type="name" 
          required 
          value={nome} 
          placeholder="Digite seu nome..."
          onChange={e => setNome(e.target.value)} />
		  <p>CPF do comprador</p>
          <input 
          type="text"
          maxLength="11" 
          required 
          value={cpf} 
          placeholder="Digite seu CPF..."
          onChange={e => setCpf(e.target.value)} />
		  <Espaço>
          <Button type="submit">Reservar assento(s)</Button>
          </Espaço>
		</Form>

    )
}
const Form=styled.form`
    margin-top: 40px;
    padding: 0 24px;
    height:400px;
    box-sizing: border-box;


p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
}
input{
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 5px;
}
`
const Espaço=styled.div`
margin-top: 40px;
`