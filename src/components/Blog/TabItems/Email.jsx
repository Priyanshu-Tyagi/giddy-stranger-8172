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

export default function Email() {
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
                  backgroundColor="#dac272"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#fad196") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2018/11/blog-img-364x185-Embedding-Images-in-HTML-Email_-Have-the-Rules-Changed_@2x-350x180.png"
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
                    Embedding Images in HTML EMail: Have the Rules Changed?
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On November 02, 2018
                    {clock()} 6min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    How to embed images in HTML emails properly? CID attachment,
                    inline embedding, linked image, or any new technique? Read
                    in our overview along with email testing tips.
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
                  backgroundColor="#b4cbfb"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("#ccd7ee") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2019/10/AMP-Small-blue@2x-350x178.png"
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
                    Everything You Want to Know About AMP for Email
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On October 31, 2019
                    {clock()} 7min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    AMP for Email gives email marketers an abundance of tools
                    for improving their campaigns. Read what this is about and
                    how to use it the right way.
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
                  backgroundColor="whatsapp.500"
                  padding="1rem 3rem"
                  _hover={{ bg: useColorModeValue("whatsapp.300") }}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2019/08/Comparison-of-10-HTML-Email-Editors-green2x-2-350x178.png"
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
                    Comparison of 10 HTML EMail Editors for Your Next Campaign
                  </Text>
                </Container>
                <div>
                  <Text fontSize="lg" color="#8a8484" fontWeight="500">
                    On August 14, 2019
                    {clock()} 12min read
                  </Text>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <Text fontSize="md" fontWeight="500">
                    Choosing a tool for painless building of responsive email
                    templates? We selected 10 options for you and prepared a
                    comparison table and UI screenshots for you to get the full
                    picture.
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
                      Lepilkina
                    </Text>
                    <Text fontSize="sm" color="#8a8484" fontWeight="500">
                      Content Specialist @Mailtrap
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
