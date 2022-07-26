import React from "react";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'

import Dash from "./Dashboard";
import Login from "./Login";

export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/dashboard" element={<Dash/>}/>
            </Routes>
        </Router>
    );
}