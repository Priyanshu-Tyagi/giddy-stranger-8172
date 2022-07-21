import { Text } from "@chakra-ui/react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import "../styles/HomePage.css";

export default function FAQ() {
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
          templateRows="repeat(3,1fr)"
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
                  Why try Mailtrap SMTP and Email API?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  We offer comprehensive metrics and stats to help understand
                  emails performance, including alerts, logs, and content
                  previews. It takes only a few steps to switch to our SMTP and
                  if you need help – we’ll guide you through the process.
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
                  What about Pricing?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  First 6 months are free if you send less than 100,000
                  emails/m. Further Mailtrap pricing plans are described here.
                  BTW, you don’t need to provide credit card information to get
                  started with our Sending solution.
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
                  Is your solution reliable ?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  Yes, more than 900,000 developers have trusted Mailtrap for 9
                  years. Companies those switched to Mailtrap SMTP even report
                  some increases in deliverability rates. And we wouldn’t offer
                  something to our customers that we don’t use ourselves.
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
                  Dedicated IP?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  We recommend to get a dedicated IP if you send more than
                  200,000 emails a month. And rest assured we keep an eye on
                  shared IPs to ensure they offer great deliverability.
                </Text>
              </Container>
            </Container>
          </GridItem>

          <GridItem>
            <Container className="FAQ" marginTop="1.5rem">
              <div style={{ marginTop: "-84px" }}>
                <img
                  src="https://drive.google.com/uc?export=view&id=1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj"
                  alt="123"
                />
              </div>
              {/* https://drive.google.com/file/d/1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj/view?usp=sharing */}
              <Container marginTop="20px">
                <Text fontSize="lg" fontWeight="800">
                  What about switching from Sengrid/Mandrill/Mailgun?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  Switching from your current sending service is pretty
                  straightforward. You can easily change the SMTPs or use
                  compatible APIs. If you need assistance contact our support
                  team. Feel free to book a call so our experts can guide you
                  during the switch
                </Text>
              </Container>
            </Container>
          </GridItem>

          <GridItem>
            <Container className="FAQ" marginTop="1.5rem">
              <div style={{ marginTop: "-84px" }}>
                <img
                  src="https://drive.google.com/uc?export=view&id=1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj"
                  alt="123"
                />
              </div>
              {/* https://drive.google.com/file/d/1ap0Amb2uqKBfAVKjIeuo3JxEtiTOr4Wj/view?usp=sharing */}
              <Container marginTop="20px">
                <Text fontSize="lg" fontWeight="800">
                  Do you offer tracking and custom domain for redirects?
                </Text>
                <br />
                <Text fontSize="sm" fontWeight="400">
                  Yes, Mailtrap offers tracking of opens and clicks. You can
                  also use you own domain for links redirects.
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
