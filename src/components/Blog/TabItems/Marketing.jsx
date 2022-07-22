import {
  Grid,
  GridItem,
  Text,
  Button,
  Icon,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

export default function Marketing() {
  function clock() {
    return <Icon as={TimeIcon} />;
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        <div>
          <Grid
            justifyItems="center"
            templateColumns="repeat(3,1fr)"
            gap="2rem"
          >
            {/* Card 1 */}

            <GridItem>
              <div>
                <Button
                  height="auto"
                  backgroundColor="#b4cbfb"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#c5d5f7") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2019/04/blog-img-364x185-Sendgrid-vs-Mandrill-vs-Mailgun-How-to-Choose_@2x-1-350x178.png"
                    alt="741"
                  />
                </Button>
              </div>
              <br />
              <div>
                <Container
                  _hover={{
                    color: useColorModeValue("whatsapp.600"),
                    cursor: "pointer",
                  }}
                >
                  <Text marginLeft="-15px" fontSize="1.3rem" fontWeight="900">
                    Sendgrid vs Mandrill vs Mailgun - How to Choose?
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On April 29, 2019
                    {clock()} 10min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    Which features of the email service provider matter the
                    most? Let’s review and compare Sendgrid, Mandrill, and
                    Mailgun, the most popular email services.
                  </Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "15px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      style={{ borderRadius: "50%" }}
                      width="35px"
                      src="https://mailtrap.io/wp-content/uploads/2021/02/Tsv-CV-105x105.jpg"
                      alt="753"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Text fontSize="1 rem" fontWeight="900">
                      Yevgen Tsvetukhin
                    </Text>
                    <Text fontSize="sm" color="#8a8484" fontWeight="500">
                      Product Manager @Mailtrap
                    </Text>
                  </div>
                </div>
              </div>
            </GridItem>

            {/* Card 2 */}

            <GridItem>
              <div>
                <Button
                  height="auto"
                  backgroundColor="whatsapp.500"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("whatsapp.300") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2020/11/Tips2021-Small-dark@2x-350x178.png"
                    alt="741"
                  />
                </Button>
              </div>
              <br />
              <div>
                <Container
                  _hover={{
                    color: useColorModeValue("whatsapp.600"),
                    cursor: "pointer",
                  }}
                >
                  <Text marginLeft="-15px" fontSize="1.3rem" fontWeight="900">
                    11 Tips to Improve Your Email Marketing in 2021
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On November 30, 2020
                    {clock()} 9min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    The new year can be an excellent opportinity for improving
                    your email marketing. Our friends from HubSpot share what to
                    focus on in 2021.
                  </Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "15px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      style={{ borderRadius: "50%" }}
                      width="35px"
                      src="https://mailtrap.io/wp-content/uploads/2021/02/irina_1000x1000_color_transparent-57x57.png"
                      alt="753"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Text fontSize="1 rem" fontWeight="900">
                      Irina Nica
                    </Text>
                    <Text fontSize="sm" color="#8a8484" fontWeight="500">
                      Senior Marketing Manager @Hubspot
                    </Text>
                  </div>
                </div>
              </div>
            </GridItem>

            {/* Card 3 */}

            <GridItem>
              <div>
                <Button
                  height="auto"
                  backgroundColor="#fac272
                    "
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#fad196") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2019/08/Intro-to-Transactional-Emails-yellow2x-350x178.png"
                    alt="741"
                  />
                </Button>
              </div>
              <br />
              <div>
                <Container
                  _hover={{
                    color: useColorModeValue("whatsapp.600"),
                    cursor: "pointer",
                  }}
                >
                  <Text marginLeft="-15px" fontSize="1.3rem" fontWeight="900">
                    Intro to Rransactional Emails
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On August 28, 2019
                    {clock()} 11min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    Transactional emails are an inseparable part of any customer
                    experience, for a reason! Learn what they’re used for and
                    how to make yours better in no time.
                  </Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "15px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      style={{ borderRadius: "50%" }}
                      width="35px"
                      src="https://mailtrap.io/wp-content/uploads/2021/02/Piotr-Big-57x57.jpg"
                      alt="753"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Text fontSize="1 rem" fontWeight="900">
                      Piotr Malek
                    </Text>
                    <Text fontSize="sm" color="#8a8484" fontWeight="500">
                      Technical Content Writer @ Mailtrap
                    </Text>
                  </div>
                </div>
              </div>
            </GridItem>
          </Grid>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
