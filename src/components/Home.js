import styled from 'styled-components';
import FilmList from './Filmlist';
import Title from './Title';


export default function Home(){

    return(
        <>
        <Title>Selecione o filme</Title>
        <FilmList></FilmList>
        </>
    )
}
const Conteudo=styled.div`
    height:5000px
    

`