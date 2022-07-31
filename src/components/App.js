import Header from "./Header"
import "./css/reset.css"
import Home from "./Home"
import Schedules from "./Schedules"
import Seatlist from "./Seatlist"
import{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sucess from "./Sucess"



export default function App(){
    const [informacao,setInformacao]=useState("");
    const [ids,setIds]=useState([]);
    const [assentos,setAssentos]=useState([]);
    
    return(
        <BrowserRouter>
            < Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filme/:movieId" element={<Schedules/>} />
                    <Route path="/sessao/:seatId" element={< Seatlist 
                    setInformacao={setInformacao} 
                    ids={ids}
                    setIds={setIds}
                    assentos={assentos}
                    setAssentos={setAssentos}
                    />} />
                    <Route path="/sucesso" element={<Sucess informacao={informacao}/>} />
                </Routes>
        </BrowserRouter>
    )
}
