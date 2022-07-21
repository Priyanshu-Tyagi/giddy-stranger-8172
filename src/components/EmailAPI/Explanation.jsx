import { Container, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Explanation() {
  return (
    <div style={{ display: "flex", padding:"0" }}>
      <Container width="60%" padding="10rem 0 0 0">
        <Text fontSize="2.5rem" color="#202c45" fontWeight="900">
          Email API for Developers
        </Text>
        <br/>
        <Text fontSize="xl" fontWeight="400">
          Deliver emails with Mailtrap Email API or SMTP from any application.
          Monitor deliverability and share stats with the team.
        </Text>
        <Container>
          <Button
            colorScheme="whatsapp"
            marginTop="3rem"
            position="none"
            padding="1.8rem"
            marginLeft="-20px"
            _hover={{ bg: useColorModeValue("whatsapp.400", "whatsapp.100") }}
            variant="solid"
          >
            <NavLink to="/sign-up">Sign Up</NavLink>
          </Button>
        </Container>
      </Container>

      <Container paddingTop="2rem" width="40%">
        <img
          width="100%"
          src="https://mailtrap.io/wp-content/uploads/2022/02/sending_landing_hero_image_2.svg"
          alt="321"
        />
      </Container>
    </div>
  );
}
