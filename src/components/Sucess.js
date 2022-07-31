import Button from "./Button";
import Infos from "./Infos";
import Title from "./Title";
import { Link } from "react-router-dom";

export default function Sucess({informacao}){
    const{title,assentos,date,time,nome,cpf}=informacao;
    
    return(
        <>
            <Title weight="700" color="#247A6B">Pedido feito com sucesso</Title>
            <Infos 
                title={title} 
                assentos={assentos}
                date={date}
                time={time}
                nome={nome}
                cpf={cpf}></Infos>
            <Link to={`/`}><Button >Voltar pra Home</Button></Link>
        </>
    )
}