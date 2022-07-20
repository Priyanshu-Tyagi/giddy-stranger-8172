import { Route, Routes } from "react-router-dom"
import Blog from "./Blog"
import CaseStudies from "./Casestudies"
import EmailAPI from "./Email-API"
import HomePage from "./HomePage"
import LogIn from "./LogIn"
import Pricing from "./Pricing"
import SignUp from "./SIgnUp"

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/email-api" element={<EmailAPI/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/case-studies" element={<CaseStudies/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/log-in" element={<LogIn/>}/>
        </Routes>
    )
}