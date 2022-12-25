import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Login} from "../Components/Login"
import { Registration } from "../Components/Registartion"
import {Forgotpassword} from "../Components/Forgotpassword"

export const Landing=()=>{
    return(
        <React.Fragment>
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/forgot" element={<Forgotpassword/>}/>
                </Routes>
             </BrowserRouter>
        </React.Fragment>
    )
}