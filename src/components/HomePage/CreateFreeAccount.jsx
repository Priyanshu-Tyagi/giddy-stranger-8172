import { Text,Button,useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function CreateFreeAccount() {
  return (
    <div style={{ backgroundColor: "#1a2e44", display: "flex" }}>
      <div style={{ width: "50%" }}>
        <div style={{marginLeft:"26%",marginTop:"5rem"}}>
          <Text
            fontSize="2xl"
            color="white"
            fontWeight="800"
            lineHeight="4rem"
            paddingRight="2rem"
          >
            Create Your Free Account
          </Text>
          <Text
            fontSize="6xl"
            color="white"
            fontWeight="800"
            lineHeight="10"
            paddingRight="2rem"
          >
            In 3 Clicks
          </Text>
        </div>
        <div style={{marginTop:"4rem"}}>
          <Button
            colorScheme="whatsapp"
            position="none"
            padding="1.5rem"
            marginLeft="26%"
            _hover={{ bg: useColorModeValue("whatsapp.400", "whatsapp.100") }}
            variant="solid"
          >
            <NavLink to="/sign-up">Sign Up For Free</NavLink>
          </Button>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <img src="https://drive.google.com/uc?export=view&id=1PYlsl7EGRtysArecT0TlZGCOfElfR9aU" />
      </div>
    </div>
  );
}

// https://mailtrap.io/wp-content/uploads/2021/01/img__cta.svg
// https://drive.google.com/file/d/1PYlsl7EGRtysArecT0TlZGCOfElfR9aU/view?usp=sharing
