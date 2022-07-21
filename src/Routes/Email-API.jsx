import Explanation from "../components/EmailAPI/Explanation";
import FAQ from "../components/EmailAPI/FAQ";
import JoinUs from "../components/EmailAPI/JoinUs";
import Testimonials from "../components/EmailAPI/Testimonials";
import WeHelpYouSwitch from "../components/EmailAPI/WeHelpYouSwitch";
import WhyUse from "../components/EmailAPI/WhyUse";
import Footer from "../components/Footer"

export default function EmailAPI() {
    return (
        <div>
            <Explanation/>
            <br/>
            <br/>
            <br/>
            <WhyUse/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <WeHelpYouSwitch/>
            <Testimonials/>
            <FAQ/>
            <JoinUs/>
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