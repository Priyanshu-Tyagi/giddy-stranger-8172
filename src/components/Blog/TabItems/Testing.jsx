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
  
  export default function Testing() {
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
                    backgroundColor="whatsapp.500"
                    padding="1rem 3rem"
                    _hover={{ bg: useColorModeValue("whatsapp.300") }}
                  >
                    <img
                      width="100%"
                      src="https://mailtrap.io/wp-content/uploads/2020/05/blog-img-364x185-How-to-Test-Emails-in-PHP@2x-350x178.png"
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
                      How to Test Emails in PHP
                    </Text>
                  </Container>
                  <div>
                    <Text fontSize="lg" color="#8a8484" fontWeight="500">
                      On May 28, 2020
                      {clock()} 6min read
                    </Text>
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <Text fontSize="md" fontWeight="500">
                    Let’s discuss how to test and preview emails in your PHP app or website during development!

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
                    backgroundColor="#b4cbfb
                    "
                    padding="1rem 3rem"
                    _hover={{ bg: useColorModeValue("#ccd7ee") }}
                  >
                    <img
                      width="100%"
                      src="https://mailtrap.io/wp-content/uploads/2018/09/Cloud-Local-Small-blue@2x-350x178.png"
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
                      SMTP Server for Testing: Cloud-based o Local?
                    </Text>
                  </Container>
                  <div>
                    <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On September 27, 2018

                      {clock()} 4min read
                    </Text>
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <Text fontSize="md" fontWeight="500">
                    How would you approach choosing an SMTP server for testing? Find the key factors to consider in this blog post.

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
                      src="https://mailtrap.io/wp-content/uploads/2019/05/How-to-Test-Emails-in-Mandrill-Sendgrid-and-Mailgun-yellow2x-350x178.png"
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
                      How to Test Emails in Mandrill, Sendgrid, and Mailgun
                    </Text>
                  </Container>
                  <div>
                    <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On May 21, 2019
                      {clock()} 6min read
                    </Text>
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <Text fontSize="md" fontWeight="500">
                    Learn about the options for quality email testing proposed by each of listed sending providers and decide whether a third-party dedicated testing service will be the right choice.

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
                        src="https://mailtrap.io/wp-content/uploads/2021/02/Tsv-CV-57x57.jpg"
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
  