import { Text } from "@chakra-ui/react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import "../styles/HomePage.css";

export default function FrequentlyAskedQuestions() {
  return (
    <div style={{ backgroundColor: "#f9f9f7" }}>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Text fontSize="4xl" fontWeight="800">
          Frequently Asked Questions
        </Text>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid
          templateColumns="repeat(2,1fr)"
          templateRows="repeat(2,1fr)"
          gap={5}
        >
          <GridItem>
            <Container className="FAQ">
              <div style={{ marginTop: "-84px" }}>
                <img
                  src="https://drive.google.com/uc?export=view&id=1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj"
                  alt="123"
                />
              </div>
              {/* https://drive.google.com/file/d/1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj/view?usp=sharing */}
              <Container marginTop="20px">
                <Text fontSize="lg" fontWeight="800">
                  Can Mailtrap send emails to real recipients?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  Mailtrap is a testing tool and is not designed to deliver
                  emails to real addresses. However, you can forward some
                  messages to your colleagues, customers, or your own inboxes
                  for testing purposes.
                </Text>
              </Container>
            </Container>
          </GridItem>

          <GridItem>
            <Container className="FAQ">
              <div style={{ marginTop: "-84px" }}>
                <img
                  src="https://drive.google.com/uc?export=view&id=1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj"
                  alt="123"
                />
              </div>
              {/* https://drive.google.com/file/d/1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj/view?usp=sharing */}
              <Container marginTop="20px">
                <Text fontSize="lg" fontWeight="800">
                  How can I preview my email in different email clients?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  Mailtrap’s HTML Check analyzes your template for support in
                  popular email clients and explains how to fix errors right
                  away. This is more efficient than manual comparison of
                  previews from email clients, but you still can forward your
                  test emails to real recipients and open them in specific email
                  clients.
                </Text>
              </Container>
            </Container>
          </GridItem>
          <GridItem>
            <Container className="FAQ" marginTop="1rem">
              <div style={{ marginTop: "-84px" }}>
                <img
                  src="https://drive.google.com/uc?export=view&id=1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj"
                  alt="123"
                />
              </div>
              {/* https://drive.google.com/file/d/1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj/view?usp=sharing */}
              <Container marginTop="20px">
                <Text fontSize="lg" fontWeight="800">
                  Can I send a test email to Mailtrap from my Gmail?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  Yes, you can! On Business, Premium, and Enterprise plans,
                  there is a separate email address available for each of your
                  inboxes. With it, you can send messages from any CRM, email
                  sending app or client, such as Gmail, Hubspot, Sendgrid, etc.
                </Text>
              </Container>
            </Container>
          </GridItem>

          <GridItem>
            <Container className="FAQ" marginTop="1rem">
              <div style={{ marginTop: "-84px" }}>
                <img
                  src="https://drive.google.com/uc?export=view&id=1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj"
                  alt="123"
                />
              </div>
              {/* https://drive.google.com/file/d/1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj/view?usp=sharing */}
              <Container marginTop="20px">
                <Text fontSize="lg" fontWeight="800">
                  How much does Mailtrap cost?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  Mailtrap features a forever free plan that offers the basic
                  functionality for personal use. Paid plans start from $9.99
                  per month, and are suitable for companies of different sizes.
                  View the Mailtrap pricing for more details.
                </Text>
              </Container>
            </Container>
          </GridItem>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
