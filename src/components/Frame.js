import styled from "styled-components"
export default function Frame({children,small}){
    return(
        <Moldura small={small}>
            <img src={children}/>
        </Moldura>
        
    )

}
const Moldura=styled.div`
    width:${(props) => props.small ? "64px" :" 145px"};
    height: ${(props) => props.small ? "89px" :" 209px"};
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:${(props) => props.small ? "0" :" 10px"};
    img {
        width: ${(props) => props.small ? "48px" :" 129px"};
        height: ${(props) => props.small ? "72px" :" 193px"};
    }

`