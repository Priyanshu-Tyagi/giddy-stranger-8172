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

export default function Cases() {
  function clock() {
    return <Icon as={TimeIcon} />;
  }

  return (
    <div>
      <br />
      <br />
      <br />

      {/* Buttons */}

      <div>
        <div style={{ width: "50%", margin: "auto" }}>
          <Grid templateColumns="repeat(4,1fr)" gap="6">
            <GridItem>
              <Button variant="solid" backgroundColor="#1a2e44" color="white">
                All
              </Button>
            </GridItem>
            <GridItem>
              <Button variant="outline" color="#1a2e44">
                Business Applications
              </Button>
            </GridItem>
            <GridItem>
              <Button variant="outline" color="#1a2e44">
                Cloud Infrastructure
              </Button>
            </GridItem>
            <GridItem>
              <Button variant="outline" color="#1a2e44">
                Software Development
              </Button>
            </GridItem>
          </Grid>
        </div>
      </div>

      {/* Cards */}

      <br />
      <br />
      <br />
      <div>
        <div style={{ width: "90%", margin: "auto" }}>
          <Grid justifyItems="center" templateColumns="repeat(3,1fr)">
            {/* Card 1 */}

            <GridItem>
              <div>
                <Button
                  height="auto"
                  backgroundColor="#fac272"
                  padding="1rem 3rem"
                  _hover={{bg:useColorModeValue("#f4c888")}}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2022/06/Featured-Image1-2-1.svg"
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
                  <Text fontSize="1.4rem" fontWeight="900">
                    How The Software House Approaches Email Development
                  </Text>
                </Container>
                <div>
                  <Text paddingLeft="15px" fontSize="lg" color="#abadb3" fontWeight="500">
                    On June 14, 2022 {clock()} 6min read
                  </Text>
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
                  _hover={{bg:useColorModeValue("#6bf38f")}}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2022/06/Featured-Image1-2-1.svg"
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
                  <Text fontSize="1.4rem" fontWeight="900">
                    How CalendlyStreamlines Email Testing with mailtrap
                  </Text>
                </Container>
                <div>
                  <Text paddingLeft="15px" fontSize="lg" color="#abadb3" fontWeight="500">
                    On June 14, 2022 {clock()} 6min read
                  </Text>
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
                  _hover={{bg:useColorModeValue("#c5d5f7")}}
                >
                  <img
                    width="100%"
                    src="https://mailtrap.io/wp-content/uploads/2022/06/Featured-Image1-2-1.svg"
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
                  <Text fontSize="1.4rem" fontWeight="900">
                    How Kinsta's Developers, Designers and QAs Collaborate On
                    Emails
                  </Text>
                </Container>
                <div>
                  <Text paddingLeft="15px" fontSize="lg" color="#abadb3" fontWeight="500">
                    On June 03, 2022 {clock()} 6min read
                  </Text>
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
