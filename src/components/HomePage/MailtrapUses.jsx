import {
  Text,
  Grid,
  GridItem,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Uses() {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div>
        <Text fontSize="4xl" fontWeight="800" textAlign="center">
          How different teams
        </Text>
        <Text fontSize="4xl" fontWeight="800" lineHeight="5" textAlign="center">
          use Mailtrap
        </Text>
      </div>
      <br />
      <br />
      <br />
      <div style={{ width: "80%", margin: "auto" }}>
        <img
          width="100%"
          src="https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg"
        />
      </div>
      <br />
      <br />
      <br />
      <div style={{ width: "92%", margin: "auto" }}>
        <Grid templateColumns="repeat(3,1fr)" gap={5}>
          <GridItem>
            <Text fontSize="xl" fontWeight="800">
              Developers
            </Text>
            <br />
            <Text fontSize="sm">
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <Icon viewBox="0 0 200 200" color="whatsapp.400">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </div>
                <div>Experiment with the email sending functionality</div>
              </div>
            </Text>
            <br />
            <Text fontSize="sm">
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <Icon viewBox="0 0 200 200" color="whatsapp.400">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </div>
                <div>
                  Cover code with tests to run automated checks via Mailtrap API
                </div>
              </div>
            </Text>
            <br />
            <Text fontSize="sm">
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <Icon viewBox="0 0 200 200" color="whatsapp.400">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </div>
                <div>
                  Verify different email aspects, debug sending script and HTML
                  template
                </div>
              </div>
            </Text>
          </GridItem>

          <GridItem>
            <Text fontSize="xl" fontWeight="800">
              QAs
            </Text>
            <br />
            <Text fontSize="sm">
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <Icon viewBox="0 0 200 200" color="whatsapp.400">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </div>
                <div>
                  Run safe email tests in staging and/or testing environment
                </div>
              </div>
            </Text>
            <br />
            <Text fontSize="sm">
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <Icon viewBox="0 0 200 200" color="whatsapp.400">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </div>
                <div>Integrate Mailtrap with automated testing tools</div>
              </div>
            </Text>
            <br />
            <Text fontSize="sm">
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <Icon viewBox="0 0 200 200" color="whatsapp.400">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </div>
                <div>Compare revised emails with their previous versions</div>
              </div>
            </Text>
          </GridItem>

          <GridItem>
            <Text fontSize="xl" fontWeight="800">
              Marketers and managers
            </Text>
            <br />
            <Text fontSize="sm">
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <Icon viewBox="0 0 200 200" color="whatsapp.400">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </div>
                <div>Smoothly collaborate with development and QA teams</div>
              </div>
            </Text>
            <br />
            <Text fontSize="sm">
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <Icon viewBox="0 0 200 200" color="whatsapp.400">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </div>
                <div>
                  View test emails in shared inboxes or forward to real
                  recipients
                </div>
              </div>
            </Text>
            <br />
            <Text fontSize="sm">
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <Icon viewBox="0 0 200 200" color="whatsapp.400">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </div>
                <div>
                  Send emails to Mailtrap inboxes from CRMs and common sending
                  tools
                </div>
              </div>
            </Text>
          </GridItem>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Button
          colorScheme="whatsapp"
          position="none"
          padding="1.5rem"
          marginLeft="44%"
          _hover={{ bg: useColorModeValue("whatsapp.400", "whatsapp.100") }}
          variant="solid"
        >
          <NavLink to="/sign-up">Sign Up For Free</NavLink>
        </Button>
      </div>
    </div>
  );
}
