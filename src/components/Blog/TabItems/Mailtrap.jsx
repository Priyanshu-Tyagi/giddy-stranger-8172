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

export default function Mailtrap() {
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
                  padding=".4rem 5rem .4rem 5rem"
                  _hover={{ bg: useColorModeValue("#ccd7ee") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2020/01/blog-img-450x330-5-Things-That-Only-Mailtrap-Can-Do@2x-245x180.png"
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
                    What Makes Mailtrap a Unique Email Testing Tool?
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On January 28, 2020
                    {clock()} 4min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    Test Bcc, preview messages, inspect HTML errors right away,
                    and conduct other crucial email checks in one tool. Yes,
                    that’s all about Mailtrap, a simple but super powerful tool
                    for safe email testing.
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
                      src="https://mailtrap.io/wp-content/uploads/2021/02/Diana-Le-57x57.jpg"
                      alt="753"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Text fontSize="1 rem" fontWeight="900">
                      Diana Lepilkina
                    </Text>
                    <Text fontSize="sm" color="#8a8484" fontWeight="500">
                      Content Specialist @Mailtrap
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
                  backgroundColor="#fac272
                    "
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#fad196") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2019/07/Share-Small-yellow@2x-350x178.png"
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
                    Share Your Email Testing Resukts with Team Members
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On July 03, 2019
                    {clock()} 3min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    Learn how Mailtrap can help you increase the efficiency of
                    your email testing process. Features for organizing your
                    test data and sharing results with your colleagues and
                    clients are explained in this post.
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

            {/* Card 3 */}

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
                    src="https://mailtrap.io/wp-content/uploads/2019/08/Using-and-Testing-Cc-and-Bcc-in-SMTP-Protocol-green2x-350x178.png"
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
                    Using and Testing Cc and Bcc in SMTP Protocol
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On August 28, 2019
                    {clock()} 5min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    Referring to the SMTP mechanics, we define the main email
                    headers and the Bcc specific in this post. We also share a
                    few email tips and explain how you can test Bcc with
                    Mailtrap.
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
          </Grid>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
