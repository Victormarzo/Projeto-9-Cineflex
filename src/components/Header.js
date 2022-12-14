import styled from 'styled-components';
import React from 'react';
import { Link } from "react-router-dom";
export default function Header(){
    return(
        
        <Link to={`/`}><Logo>CINEFLEX</Logo></Link>
    )
}
const Logo = styled.div`
	height: 67px;
    width: 100%;
    left: 0px;
    top: 0px;
    background: #C3CFD9;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E8833A;
    position: fixed;
`;