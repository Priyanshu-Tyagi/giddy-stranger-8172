import CaseIntro from "../components/CaseStudies/CaseIntro"
import Cases from "../components/CaseStudies/Cases"
import Footer from "../components/Footer"
import CreateFreeAccount from "../components/HomePage/CreateFreeAccount"
import TrustedBy from "../components/HomePage/TrustedBy"

export default function CaseStudies(){
    return (
        <div>
            <CaseIntro/>
            {/* <br/>
            <br/>
            <br/> */}
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