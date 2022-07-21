import { Text, Button, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function StartNow2() {
  return (
    <div style={{ backgroundColor: "#1a2e44", display: "flex" }}>
      <div style={{ width: "60%" }}>
        <div style={{ marginLeft: "22%", marginTop: "5rem" }}>
          <Text fontSize="6xl" color="white" fontWeight="800" lineHeight="3rem">
            Your email workflows deserve more love
          </Text>
        </div>
        <div style={{ marginTop: "4rem" }}>
          <Button
            colorScheme="whatsapp"
            position="none"
            padding="1.5rem"
            marginLeft="22%"
            _hover={{ bg: useColorModeValue("whatsapp.400", "whatsapp.100") }}
            variant="solid"
          >
            <NavLink to="/sign-up">Start Now!</NavLink>
          </Button>
        </div>
      </div>
      <div style={{ width: "40%" }}>
        <img src="https://drive.google.com/uc?export=view&id=1zRMmlmvsaJPLWFmLKh1rZqiEP_iAUmfm" />
      </div>
    </div>
  );
}

// https://mailtrap.io/wp-content/uploads/2021/01/img__cta.svg
// https://drive.google.com/file/d/1zRMmlmvsaJPLWFmLKh1rZqiEP_iAUmfm/view?usp=sharing
