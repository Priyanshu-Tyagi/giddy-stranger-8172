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

export default function Security() {
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
                  _hover={{ bg: useColorModeValue("#ccd7ee") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2020/07/blog-img-364x185-Ultimate-Guide-to-Email-Authentication@2x-350x180.png"
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
                    Ultimate Guide to Email Authentication
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On July 09, 2020
                    {clock()} 11min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    In this ultimate guide, we cover all available email
                    authentication methods, such as SPF, DKIM, and others. We
                    also share detailed examples for each one.
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

            {/* Card 2 */}

            <GridItem>
              <div>
                <Button
                  height="auto"
                  backgroundColor="whatsapp.500
                    "
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("whatsapp.300") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2019/08/Security-Small-green@2x-350x178.png"
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
                    Everything You Need to Know About SMTP Security
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On August 14, 2019
                    {clock()} 10min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    SMTP by its nature is not secured in any way, surprisingly.
                    Luckily there are ways to keep your emails safe with no or
                    little effort.
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

            {/* Card 3 */}

            <GridItem>
              <div>
                <Button
                  height="auto"
                  backgroundColor="#fac272"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#fad196") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2021/03/STARTTLS-vs-SSL-vs-TLS-orange2x-350x178.png"
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
                    STARTTLS vs SSL vs TLS
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On October 08, 2019
                    {clock()} 5min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    With so many similar names, it's not hard to get confused.
                    Check out our latest guide to email encryption.
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
