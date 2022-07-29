import styled from "styled-components"
export default function Frame({children}){
    return(
        <Moldura>
            <img src={children}/>
        </Moldura>
        
    )

}
const Moldura=styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:10px;
    img {
        width: 129px;
        height: 193px;
    }

`