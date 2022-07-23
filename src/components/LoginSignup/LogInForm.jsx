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

export default function LogInForm() {
  const User = JSON.parse(localStorage.getItem("User"));
  const [pass, setPass] = useState("");
  return (
    <div>
      <div>
        <FormControl>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel>Password</FormLabel>
            <FormLabel>
              <span style={{ color: "#3b93e1" }}>Forgot password?</span>
            </FormLabel>
          </div>
          <Input
            size="lg"
            marginBottom="20px"
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </FormControl>
      </div>
      <div>
        <Checkbox>Remember me</Checkbox>
      </div>
      <br />
      <div>
        <div>
          <NavLink to="/">
            <Button
              variant="solid"
              size="lg"
              borderColor="black"
              bg="whatsapp.500"
              width="100%"
              py="1.8rem"
              color="white"
              _hover={{
                bg: useColorModeValue("whatsapp.300"),
              }}
              isDisabled={User.pass != pass}
            >
              <Text fontWeight="200" marginLeft="10px">
                Log In
              </Text>
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

{
  /* <FormControl>
          <FormLabel>Email</FormLabel>
          <Input size="lg" marginBottom="20px" type="email" required />
          <FormLabel>Password</FormLabel>
          <Input size="lg" marginBottom="20px" type="password" required />
          <FormLabel>Confirmation</FormLabel>
          <Input
            onFocus={() => setLoading(true)}
            size="lg"
            marginBottom="20px"
            type="password"
            required
          />
        </FormControl> */
}
