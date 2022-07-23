import {
  Grid,
  GridItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LSFooter() {
  return (
    <>
      <div>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem>
            <Stack>
              {/* <Text fontSize="sm" paddingLeft="2.7rem">
                <br />
              </Text> */}
              <Text fontSize="xs" paddingLeft="2.7rem">
                <img
                  src="https://drive.google.com/uc?export=view&id=1cunZ8C5ljNPSQy4ajKnAZbpeYcXQe2tE"
                  // https://drive.google.com/file/d/1cunZ8C5ljNPSQy4ajKnAZbpeYcXQe2tE/view?usp=sharing
                  alt=""
                />
              </Text>
              <Text fontSize="sm" paddingLeft="2.7rem">
                <br />
              </Text>
              <Text fontSize="sm" paddingLeft="2.7rem">
                <br />
              </Text>
              <Text fontSize="sm" paddingLeft="2.7rem">
                <br />
              </Text>
              <Text fontSize="sm" paddingLeft="2.7rem">
                <br />
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize="md" fontWeight="900" paddingLeft="2.7rem">
                Mailtrap
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Pricing
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Changelog
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Status
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Terms of Service
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Privacy Policy
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Navigational Information
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                DPA
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize="md" fontWeight="900" paddingLeft="2.7rem">
                Railsware Experience
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Mailtrap Blog
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Coupier.io
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Smart Checklist for Jira
              </Text>
              <Text
                fontSize="sm"
                paddingLeft="2.7rem"
                _hover={{ color: useColorModeValue("whatsapp.500") }}
              >
                Careers - Railsware Hiring
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize="md" fontWeight="900" paddingLeft="2.7rem">
                Conatct
              </Text>
              <Text fontSize="sm" paddingLeft="2.7rem">
                email: support@mailtrap.io
              </Text>
              {/* <Text fontSize="sm" paddingLeft="2.7rem">
                <br />
              </Text> */}
              <Text fontSize="sm" paddingLeft="2.7rem">
                <img
                  width="55%"
                  src="https://drive.google.com/uc?export=view&id=1mtphbxfyGal2Rv4BhvXB3ln5S3gSGHAv"
                  alt=""
                />
                {/* https://drive.google.com/file/d/1mtphbxfyGal2Rv4BhvXB3ln5S3gSGHAv/view?usp=sharing */}
              </Text>
              <Text fontSize="sm" paddingLeft="2.7rem">
                <br />
              </Text>
              <Text fontSize="sm" paddingLeft="2.7rem">
                <br />
              </Text>
              <Text fontSize="sm" paddingLeft="2.7rem">
                <br />
              </Text>
              <Text fontSize="sm" paddingLeft="2.7rem"></Text>
            </Stack>
          </GridItem>
        </Grid>
      </div>
        <br/>
        <br/>
        <br/>
      <div style={{ display: "flex" }}>
        <div style={{width:"60%"}}>
          <Text marginTop="108px" fontSize="sm" paddingLeft="2.7rem">
            © Railsware Products Studio, Inc.
          </Text>
        </div>
        <div>
          <Stack>
            <Text fontSize="lg" fontWeight="900" paddingLeft="5.8rem">
              What is Mailtrap?
            </Text>
            <Text fontSize="md" paddingLeft="5.8rem" paddingRight="6rem">
              Mailtrap is a test mail server solution that allows testing email
              notifications without sending them to the real users of your
              application. Not only does Mailtrap work as a powerful email test
              tool, it also lets you view your dummy emails online, forward them
              to your regular mailbox, share with the team and more! Mailtrap is
              a mail server test tool built by Railsware Products, Inc., a
              premium software development consulting company.
            </Text>
          </Stack>
        </div>
      </div>
    </>
  );
}
