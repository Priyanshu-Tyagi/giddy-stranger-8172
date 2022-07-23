import { Button, useColorModeValue, Icon, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import SignUpForm from "./SingUpForm";

export default function SignUpContent() {
  const [openform,setOpenform]  = useState(false);
  const ColorChange= useColorModeValue("whatsapp.300")
  const formopen= () => {
    if(openform){
     return <SignUpForm/>
    }else{
      return <Button
                  variant="solid"
                  size="lg"
                  borderColor="black"
                  bg="whatsapp.500"
                  width="100%"
                  py="1.8rem"
                  color="white"
                  _hover={{
                    bg: ColorChange,
                  }}
                  onClick={()=>setOpenform(true)}
                >
                  <Text fontWeight="200" marginLeft="10px">
                    Sign Up With Your Email 
                  </Text>
                </Button>
    }
  }

  const Google = (props) => (
    <Icon viewBox="0 0 50 51" {...props}>
      <path
        fill="currentColor"
        d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
      ></path>
    </Icon>
  );

  const GitHub = (props) => (
    <Icon viewBox="0 0 64 64" {...props}>
      <path
        fill="currentColor"
        d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
      ></path>
    </Icon>
  );

  const Office = (props) => (
    <Icon viewBox="0 0 55 55" {...props}>
      <path
        fill="currentColor"
        d="M44.257,5.333l-12.412-3.3c-0.192-0.051-0.396-0.044-0.582,0.021l-25.588,8.8C5.271,10.993,5,11.373,5,11.8V36v1.2v1.065 v0.01c0,0.363,0.286,0.737,0.675,0.871l25.588,8.8C31.368,47.981,31.478,48,31.588,48c0.086,0,0.173-0.011,0.257-0.033l12.412-3.3 C44.695,44.55,45,44.153,45,43.7V6.3C45,5.847,44.695,5.45,44.257,5.333z M30,10.827v29.532L8.153,37.476l7.191-2.637 C15.738,34.695,16,34.32,16,33.9V13.715L30,10.827z"
      ></path>
    </Icon>
  );

  return (
    <>
      <br />
      <br />
      <br />

      <div style={{ display: "flex", width: "75%", margin: "auto" }}>
        {/* SING UP BUTTONS ON LEFT SIDE */}

        <div style={{ width: "60%" }}>
          <div style={{ width: "60%" }}>
            <div>
              <Text fontSize="4xl" fontWeight="900" lineHeight="2rem">
                Create Free Forever Account
              </Text>
            </div>
            <br />
            <div>
              <Stack gap="3">
                {/* GOOGLE */}

                <Button
                  variant="outline"
                  size="lg"
                  borderColor="black"
                  py="1.8rem"
                  color="#1a2e44"
                  _hover={{
                    bg: useColorModeValue("#354d66"),
                    color: useColorModeValue("white"),
                  }}
                >
                  <Text>{Google()}</Text>{" "}
                  <Text fontWeight="200" marginLeft="10px">
                    Use Google account
                  </Text>
                </Button>

                {/* GITHUB */}

                <Button
                  variant="outline"
                  size="lg"
                  borderColor="black"
                  py="1.8rem"
                  color="#1a2e44"
                  _hover={{
                    bg: useColorModeValue("#354d66"),
                    color: useColorModeValue("white"),
                  }}
                >
                  {GitHub()}
                  <Text fontWeight="200" marginLeft="10px">
                    Use Github account
                  </Text>
                </Button>

                {/* OFFICE 365 */}

                <Button
                  variant="outline"
                  size="lg"
                  borderColor="black"
                  py="1.8rem"
                  color="#1a2e44"
                  _hover={{
                    bg: useColorModeValue("#354d66"),
                    color: useColorModeValue("white"),
                  }}
                >
                  {Office()}
                  <Text fontWeight="200" marginLeft="10px">
                    Use Office 365 account
                  </Text>
                </Button>
              </Stack>
            </div>
            <br />
            <Text fontSize="1.2rem" fontWeight="200" textAlign="center">
              OR
            </Text>
            <br />

            {/* SINGUP FORM */}

            <div>
              <div>
                {formopen()}
              </div>
              <br />
              <div>
                <Stack textAlign="center">
                  <Text lineHeight="5">By creating a Mailtrap account, you agree to our</Text>
                  <Text lineHeight="5"><span style={{color:"#3b93e1"}}>Terms of Service</span> and <span style={{color:"#3b93e1"}}>Privacy Policy</span>.</Text>
                  <Text lineHeight="5">
                    We'll occasionally send you account related emails.
                  </Text>
                </Stack>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE WITH CARD IMAGES */}

        <div style={{ width: "40%" }}>
          <br />
          <br />
          <div>
            <img
              width="83%"
              src="https://assets.mailtrap.io/packs/assets/landing/signup-29d04f096f43afe622ed.svg"
              alt="129"
            />
          </div>

          <div
            style={{
              display: "flex",
              paddingLeft: "19%",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="https://assets.mailtrap.io/packs/assets/landing/no-cc-f64815040928cb2cd45e.svg"
                alt="130"
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <Text fontSize="md" fontWeight="700">
                No credit card needed
              </Text>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              paddingLeft: "19%",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            <div>
              <img
                src="https://assets.mailtrap.io/packs/assets/landing/no-contract-6c7fcc24afc64e708f1d.svg"
                alt="132"
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <Text fontSize="md" fontWeight="700">
                No contract needed
              </Text>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
