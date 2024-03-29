import Footer from "../components/Footer";
import Challenge from "../components/HomePage/ChallengeSolver";
import CreateFreeAccount from "../components/HomePage/CreateFreeAccount";
import SimpleSlider from "../components/HomePage/Feedback";
import FrequentlyAskedQuestions from "../components/HomePage/FrequentlyAskedQuestions";
import Intro from "../components/HomePage/Intro";
import Uses from "../components/HomePage/MailtrapUses";
import ModalWithVideo from "../components/HomePage/ModalwithVideo";
import Setup from "../components/HomePage/Setup";
import TrustedBy from "../components/HomePage/TrustedBy";
import Navbar from "../components/Navbar";

export default function HomePage(){
    return (
        <div >
            <Navbar/>
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
            <SimpleSlider/>
            <TrustedBy/>
            <FrequentlyAskedQuestions/>
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
