import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { E1, E2, E3, E4, R1, R2, R3, R4 } from "./Navitems";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "150" }}>
      <div>
        <Text
          fontSize="xl"
          textAlign="center"
          padding="1.2rem 0px"
          bg="#1a2e44"
          color="white"
          fontWeight="800"
        >
          Stand with Ukraine 🇺🇦 Donate to support
        </Text>
      </div>

      <div className="navdiv">
        <NavLink to="/">
          <img
            src="https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg"
            alt="Logo"
          />
        </NavLink>
        <div style={{ display: "flex" }}>
          <div className="navitems">
            {/* Email Testing NAVITEM */}

            <Menu isOpen={isOpen1}>
              <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                // _hover={{ color: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen1}
                onMouseLeave={onClose1}
              >
                Email Testing
                {isOpen1 ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList onMouseEnter={onOpen1} onMouseLeave={onClose1}>
                <MenuItem>
                  <E1 />
                </MenuItem>
                <MenuItem>
                  <E2 />
                </MenuItem>
                <MenuItem>
                  <E3 />
                </MenuItem>
                <MenuItem>
                  <E4 />
                </MenuItem>
              </MenuList>
            </Menu>

            {/* EMAIL API NAVITEM */}

            <Menu>
              <NavLink to="/email-api">
                <MenuButton
                  variant="ghost"
                  mx={1}
                  py={[1, 2, 2]}
                  px={4}
                  borderRadius={5}
                  _hover={{ color: useColorModeValue("gray.500", "gray.500") }}
                  aria-label="Courses"
                  fontWeight="normal"
                >
                  Email API
                </MenuButton>
              </NavLink>
            </Menu>

            {/* PRICING NAVITEM */}

            <Menu>
              <NavLink to="/pricing">
                <MenuButton
                  variant="ghost"
                  mx={1}
                  py={[1, 2, 2]}
                  px={4}
                  borderRadius={5}
                  _hover={{ color: useColorModeValue("gray.500", "gray.500") }}
                  aria-label="Courses"
                  fontWeight="normal"
                >
                  Pricing
                </MenuButton>
              </NavLink>
            </Menu>

            {/* RESOURCES NAVITEM */}

            <Menu isOpen={isOpen}>
              <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                // _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                Resources {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>
                  <R1 />
                </MenuItem>
                <MenuItem>
                  <R2 />
                </MenuItem>
                <MenuItem>
                  <R3 />
                </MenuItem>
                <MenuItem>
                  <R4 />
                </MenuItem>
              </MenuList>
            </Menu>
          </div>

          <div className="Navbutton">
            <Button colorScheme="black" padding="0px 18px" variant="outline">
              <NavLink to="/log-in">Log In</NavLink>
            </Button>
            <Button
              colorScheme="whatsapp"
              padding="0px 18px"
              _hover={{ bg: useColorModeValue("whatsapp.400", "whatsapp.100") }}
              variant="solid"
            >
              <NavLink to="/sign-up">Sign Up</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div style={{display:"flex"}}>
    <div>
        <img src="https://mailtrap.io/wp-content/uploads/2021/06/qa_automation_icon_menu.svg"/>
    </div>
    <div>
        <div>qwertyu</div>
        <div>qwertyui</div>
    </div>
</div> */
}
