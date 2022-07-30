import Header from "./Header"
import "./css/reset.css"
import Home from "./Home"
import Schedules from "./Schedules"
import Seatlist from "./Seatlist"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App(){
    return(
        <BrowserRouter>
            < Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filme/:movieId" element={<Schedules/>} />
                    <Route path="/sessao/:seatId" element={< Seatlist/>} />
                    
                </Routes>
        </BrowserRouter>
    )
}
//<Route path="/sucesso" element={<Sucess />} />