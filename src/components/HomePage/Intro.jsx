import { Text } from "@chakra-ui/react"
import "../styles/HomePage.css"

export default function Intro(){
    return (
        <div>
            <Text fontSize="5xl" fontWeight="800" textAlign="center">Email Sandbox Service</Text>
            <br/>
            <br/>
            <Text fontSize="lg" fontWeight="600" lineHeight="7" textAlign="center">Capture SMTP traffic from staging and dev environments</Text>
            <br/>
            <Text fontSize="lg" fontWeight="600" lineHeight="7" textAlign="center">Automate test flows and scenarios with flexible API</Text>
            <br/>
            <Text fontSize="lg" fontWeight="600" lineHeight="7" textAlign="center">Analyze email content for spam score and validate HTML/CSS</Text>
            <br/>
            <br/>
            <div className="introimgdiv">
                <img className="introimg" src="https://mailtrap.io/wp-content/uploads/2021/04/Rails.svg" alt="" />
                <img className="introimg" src="https://mailtrap.io/wp-content/uploads/2021/04/Python.svg" alt="" />
                <img className="introimg" src="https://mailtrap.io/wp-content/uploads/2021/04/NET.svg" alt="" />
                <img className="introimg" src="https://mailtrap.io/wp-content/uploads/2021/04/Symfony.svg" alt="" />
                <img className="introimg" src="https://mailtrap.io/wp-content/uploads/2021/04/Laravel.svg" alt="" />
            </div>
        </div>
    )
}