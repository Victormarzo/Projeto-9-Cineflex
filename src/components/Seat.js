import styled from "styled-components";
import {useState} from "react";

export default function Seat({children,avaliable,id,ids,setIds,assentos,setAssentos}){
    const [selected,setSelected]=useState(false);
    
    function repara(){
        if(avaliable===true){
            if(ids.includes(id)){
                let x=ids.filter((value)=>value!==id)
                setIds(x);
            }else{
                setIds([...ids,id])
                
            }
            if(assentos.includes(children)){
                let x=assentos.filter((value)=>value!==children)
                setAssentos(x);
            }else{
                setAssentos([...assentos,children])
            }
            console.log(ids)
        }else{
            alert("Esse assento não está disponível");
        }
        
    }
      
    return(
        <Assento onClick={() => {
            setSelected(!selected);
            repara();
            
        }} avaliable={avaliable} ids={ids} selected={selected} >{children}</Assento>
    )
}
const Assento=styled.div`
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.avaliable ? props.selected ? "#8DD7CF":"#C3CFD9" : "#FBE192"};
    border: 1px solid ${(props) => props.avaliable ? props.selected ? "#1AAE9E":"#7B8B99" : "#F7C52B"};
    border-radius: 12px;
    margin-bottom: 18px;
    margin-left: 3.5px;
    margin-right: 3.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;

    letter-spacing: 0.04em;

    color: #000000;
`