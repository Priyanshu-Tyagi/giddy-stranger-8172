import Footer from "../components/Footer";
import Challenge from "../components/HomePage/ChallengeSolver";
import Intro from "../components/HomePage/Intro";
import Uses from "../components/HomePage/MailtrapUses";
import ModalWithVideo from "../components/HomePage/ModalwithVideo";
import Setup from "../components/HomePage/Setup";
import TrustedBy from "../components/HomePage/TrustedBy";

export default function HomePage(){
    return (
        <div >
            <br/>
            <br/>
            <Intro/>
            <br/>
            <br/>
            <ModalWithVideo/>
            <br/>
            <Challenge/>
            <br/>
            <br/>
            <br/>
            <Setup/>
            <br/>
            <br/>
            <br/>
            <Uses/>
            <br/>
            <br/>
            <br/>
            <TrustedBy/>
            <br/>
            <br/>
            <br/>            
            <Footer/>
        </div>
    )
}