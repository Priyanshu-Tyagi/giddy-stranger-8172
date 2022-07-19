import { Route, Routes } from "react-router-dom"
import EmailAPI from "./Email-API"
import HomePage from "./HomePage"
import Pricing from "./Pricing"

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/email-api" element={<EmailAPI/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
    )
}