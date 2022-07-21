import { Button, Container, Text } from "@chakra-ui/react";

export default function WeHelpYouSwitch() {
  return (
    <div>
      <div style={{backgroundColor:"#f9c273",width:"60%",margin:"auto",borderRadius:"12px", padding:"1rem 2.5rem 3rem 2rem"}}>
        <br/>
        <Text fontSize="3xl" color="#1a2e44" fontWeight="800">We Help You Switch</Text>
        <br/>
        <Text fontSize="md">
          Our Support and Deliverability experts are here to help you. Don’t
          hesitate to reach out now. Our team will guide you during the whole
          process.
        </Text>
        <br/>
        <Button backgroundColor="#1a2e44" color="#f9c273" >Contact Us</Button>
      </div>
    </div>
  );
}
