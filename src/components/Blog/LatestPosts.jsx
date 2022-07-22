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

export default function LatestPosts() {
  function clock() {
    return <Icon as={TimeIcon} />;
  }

  return (
    <div>
      <br />
      <br />
      <br />

      <Text textAlign="center" fontSize="1.3rem" fontWeight="800">
        The Lastest Posts
      </Text>

      {/* Cards */}

      <br />
      <br />
      <br />
      <div>
        <div style={{ width: "90%", margin: "auto" }}>
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
                  backgroundColor="#fac272"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#f4c888") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2022/06/HTML5-video-in-emails_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-9-520x270.png"
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
                    How to Embed HTML5 Video in Email
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On June 23, 2022 {clock()} 10min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    Here is the ultimate guide to the HTML5 videos in emails:
                    how to embed them, what email clients they work with (and
                    where there is a need for another solution), how to code
                    them, and what the alternatives to the HTML5 videos could
                    be.
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
                      src="https://mailtrap.io/wp-content/uploads/2022/01/me-57x57.jpeg"
                      alt="753"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Text fontSize="1 rem" fontWeight="900">
                      Viktoriia Ivanenko
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
                  backgroundColor="#51d273"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#6bf38f") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2022/06/Featured_img_backbgound_color_FFBE64-347x180.png"
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
                    Email Headers Guide
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On June 16, 2022 {clock()} 7min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    Email Headers document detailed information regarding your
                    email and its route. Learning to analyze Email Headers, or
                    Email Metadata, proves useful in aspects of safety and
                    security. With this guide, you will be able to learn which
                    headers to prioritize depending on your goal as a recipient,
                    sender, or admin.
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
                      src="https://mailtrap.io/wp-content/uploads/2021/02/DE-96e2db05-57x57.jpg"
                      alt="753"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Text fontSize="1 rem" fontWeight="900">
                      Denys Velykozhon
                    </Text>
                    <Text fontSize="sm" color="#8a8484" fontWeight="500">
                      Content Marketer @Mailtrap
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
                  backgroundColor="#b4cbfb"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#c5d5f7") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2022/06/Featured_img_1_transparent-347x180.png"
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
                    Email Deliverability Consultants and Why You May Need One
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On June 03, 2022 {clock()} 7min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    How to improve your email deliverability and what are the
                    best practices to work with email deliverability
                    consultants? How to understand whether you need one? All
                    major points on email deliverability experts, and what they
                    can do for you.
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
                      src="https://mailtrap.io/wp-content/uploads/2022/01/me-57x57.jpeg"
                      alt="753"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Text fontSize="1 rem" fontWeight="900">
                      Viktoriia Ivanenko
                    </Text>
                    <Text fontSize="sm" color="#8a8484" fontWeight="500">
                      Technical Content Writer @ Mailtrap
                    </Text>
                  </div>
                </div>
              </div>
            </GridItem>

            {/* Card 4 */}

            <GridItem>
              <div>
                <Button
                  height="auto"
                  backgroundColor="#1a2e44"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#404f5f") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2019/08/Django1_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-11-1-347x180.png"
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
                    Send, Receive, and Test Emails in Django
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On May 19, 2022 {clock()} 12min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    A guide on how to send emails from a Django app in the most
                    efficient way. Check out different functions and packages to
                    streamline your email.
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
                      src="https://mailtrap.io/wp-content/uploads/2021/02/dmitry-Shcherbakan-57x57.jpg"
                      alt="753"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Text fontSize="1 rem" fontWeight="900">
                      Dmitriy Shcherbakan
                    </Text>
                    <Text fontSize="sm" color="#8a8484" fontWeight="500">
                      Full Stack Developer @Railsware
                    </Text>
                  </div>
                </div>
              </div>
            </GridItem>

            {/* Card 5 */}

            <GridItem>
              <div>
                <Button
                  height="auto"
                  backgroundColor="#51d273"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#6bf38f") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2022/05/Backend-Testing_Featured_img-347x180.png"
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
                    Backend Testing Guide
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On May 13, 2022 {clock()} 7min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    Achieve high performance and maintenance with Backend
                    Testing. See how Backend Testing increases business
                    prosperity and application functionality, which tools to use
                    and how can you begin testing your services today.
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
                      src="https://mailtrap.io/wp-content/uploads/2022/03/grigory_photo-57x57.jpeg"
                      alt="753"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Text fontSize="1 rem" fontWeight="900">
                      Grigori Monaselidze
                    </Text>
                    <Text fontSize="sm" color="#8a8484" fontWeight="500">
                      Content Manager @ Mailtrap
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
