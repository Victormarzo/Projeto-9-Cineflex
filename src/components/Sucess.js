import Button from "./Button";
import Infos from "./Infos";
import Title from "./Title";

export default function Sucess({objeto}){
    
    
    return(
        <>
            <Title color="#247A6B">Pedido feito com sucesso</Title>
            <Infos 
                title={title} 
                list={list}
                date={date}
                hour={date}
                nome={nome}
                cpf={cpf}></Infos>
            <Button>Voltar pra Home</Button>
        </>
    )
}