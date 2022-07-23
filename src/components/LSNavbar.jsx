import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import { useColorModeValue, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function LSNavbar() {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "150" }}>
      <div className="navdiv">
        <NavLink to="/">
          <img
            src="https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg"
            alt="Logo"
          />
        </NavLink>
        <div style={{ display: "flex" }}>
          <div className="Navbutton">
            <NavLink to="/log-in">
              <Button colorScheme="black" padding="0px 18px" variant="outline">
                Log In
              </Button>
            </NavLink>
            <NavLink to="/sign-up">
              <Button
                colorScheme="whatsapp"
                padding="0px 18px"
                _hover={{
                  bg: useColorModeValue("whatsapp.400", "whatsapp.100"),
                }}
                variant="solid"
              >
                Sign Up
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
