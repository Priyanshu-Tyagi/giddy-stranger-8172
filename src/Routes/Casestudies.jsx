import CaseIntro from "../components/CaseStudies/CaseIntro"
import Cases from "../components/CaseStudies/Cases"
import Footer from "../components/Footer"
import CreateFreeAccount from "../components/HomePage/CreateFreeAccount"
import TrustedBy from "../components/HomePage/TrustedBy"
import Navbar from "../components/Navbar";

export default function CaseStudies(){
    return (
        <div>
            <Navbar/>
            <CaseIntro/>
            <Cases/>
            <TrustedBy/>
            <CreateFreeAccount/>
            <br/>
            <br/>
            <br/>
            <Footer/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
