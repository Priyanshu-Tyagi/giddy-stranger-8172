import {
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useColorModeValue,
  Button,
  Text,
  Checkbox,
  CheckboxGroup,
  Spinner,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SignUpForm() {
  const [isspinner, setIsSpinner] = useState(false);
  const [loading, setLoading] = useState(false);

  const Correct = (props) => (
    <Icon
      viewBox="0 0 32 32"
      width="40px"
      height="40px"
      {...props}
      color="whatsapp.700"
    >
      <path
        fill="currentColor"
        d="M 28.796875 6.1347656 A 1.0001 1.0001 0 0 0 28.257812 6.2929688 C 22.174649 10.08797 17.189059 15.185127 13.029297 21.216797 C 10.925384 18.33288 8.5825295 15.811668 5.7167969 14.136719 A 1.0001 1.0001 0 1 0 4.7089844 15.863281 C 7.5979308 17.551798 10.05178 20.18558 12.244141 23.419922 A 1.0001 1.0001 0 0 0 13.90625 23.408203 C 18.081279 17.074764 23.131242 11.848869 29.316406 7.9902344 A 1.0001 1.0001 0 0 0 28.796875 6.1347656 z"
      ></path>
    </Icon>
  );
  const openSpinner = () => {
    if (isspinner) {
      if (loading) {
        return Correct();
      } else {
        return (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
        );
      }
    } else {
      // console.log(isspinner);
      return (
        <Button
          borderRadius="0"
          size="sm"
          border="3px solid #dfdcdc"
          bg="white"
          onClick={() => setIsSpinner(true)}
        ></Button>
      );
    }
  };
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass1, setPass1] = useState("");

  const User = {
    email: email,
    pass: pass,
    pass1: pass1,
  };

  return (
    <div>
      <div>
        <form id="signupfo">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              size="lg"
              marginBottom="20px"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel>Password</FormLabel>
            <Input
              size="lg"
              marginBottom="20px"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
            <FormLabel>Confirmation</FormLabel>
            <Input
              onFocus={() => setLoading(true)}
              size="lg"
              marginBottom="20px"
              type="password"
              onChange={(e) => setPass1(e.target.value)}
            />
          </FormControl>
        </form>
      </div>

      {/* RECAPTCHA DIV */}

      <div>
        <div
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            border: "2px solid #dfdcdc",
            justifyContent: "space-between",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div
            style={{
              display: "flex",
              aligenContent: "center",
              padding: "18px",
            }}
          >
            {/* <Checkbox isChecked="false" onChange={()=>{}}>Checkbox</Checkbox> */}
            {openSpinner()}

            <Text alignSelf="center" marginLeft="15px">
              I'm not a robot
            </Text>
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?export=view&id=1eQCl0Ur6JTkN8OtfGo7xwQfEGB3pjPIm"
              alt="1906"
            />
            {/* https://drive.google.com/file/d/1eQCl0Ur6JTkN8OtfGo7xwQfEGB3pjPIm/view?usp=sharing */}
          </div>
        </div>
      </div>

      <div>
        <br />
        <Text textAlign="center" lineHeight="5">
          You will receive the confirmation email after submitting this form.
        </Text>
        <br />
        <NavLink to="/log-in">
          <Button
            type="submit"
            size="lg"
            width="100%"
            py="1.8rem"
            form="singupfo"
            colorScheme="whatsapp"
            padding="0px 18px"
            _hover={{ bg: useColorModeValue("whatsapp.400", "whatsapp.100") }}
            variant="solid"
            isDisabled={pass != pass1}
            onClick={localStorage.setItem("User", JSON.stringify(User))}
          >
            Sign Up
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
