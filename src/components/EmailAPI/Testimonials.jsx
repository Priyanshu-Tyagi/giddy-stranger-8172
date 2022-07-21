import { Text } from "@chakra-ui/react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import "../styles/HomePage.css";

export default function Testimonials() {
  return (
    <div style={{ backgroundColor: "#f9f9f7" }}>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Text fontSize="4xl" fontWeight="800">
          Customers Testimonials
        </Text>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid templateColumns="repeat(2,1fr)" gap={5}>
          <GridItem>
            <Container className="FAQ">
              <div style={{ marginTop: "-84px" }}>
                <img
                  src="https://drive.google.com/uc?export=view&id=1yG85-7YH2bl4SzutfVVW6weK2pbstgEk"
                  alt="123"
                />
              </div>
              {/* https://drive.google.com/file/d/1yG85-7YH2bl4SzutfVVW6weK2pbstgEk/view?usp=sharing */}
              <Container marginTop="20px">
                <Text fontSize="sm" fontWeight="400">
                  We've been users of mailtrap for a long time yet their new
                  sending functionality has still managed to surprise us with
                  its ease of onboarding and support, reliability and analytics.
                  It was a seamless switch from a big competitor and we've never
                  looked back.
                </Text>
                <br />
                <Text fontSize="lg" fontWeight="800">
                  Will Henderson
                </Text>
                <Text fontSize="md" fontWeight="600">
                  PCO @ Knowa.co
                </Text>
                <div style={{ marginTop: "35px", marginLeft: "375px" }}>
                  <img
                    width="86px"
                    src="https://mailtrap.io/wp-content/uploads/2022/01/Illustrations-for-Sending_photo_1-105x105.png"
                    alt="123"
                  />
                </div>
              </Container>
            </Container>
          </GridItem>

          <GridItem>
            <Container className="FAQ">
              <div style={{ marginTop: "-84px" }}>
                <img
                  src="https://drive.google.com/uc?export=view&id=1yG85-7YH2bl4SzutfVVW6weK2pbstgEk"
                  alt="123"
                />
              </div>
              {/* https://drive.google.com/file/d/1yG85-7YH2bl4SzutfVVW6weK2pbstgEk/view?usp=sharing */}
              <Container marginTop="20px">
                <Text fontSize="sm" fontWeight="400">
                  We choose Mailtrap as sending provider for transactional emails. We've been using Sendgrid before and didn't have any issues with the trasition and our deliverability even improved a little. We love how smooth the experience was.
                </Text>
                <br />
                <Text fontSize="lg" fontWeight="800">
                  Will Henderson
                </Text>
                <Text fontSize="md" fontWeight="600">
                  Product Manager @ Coupler.io
                </Text>
                <div style={{ marginTop: "35px", marginLeft: "375px" }}>
                  <img
                    width="86px"
                    src="https://mailtrap.io/wp-content/uploads/2022/01/Illustrations-for-Sending_photo_2-105x105.png"
                    alt="123"
                  />
                </div>
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
