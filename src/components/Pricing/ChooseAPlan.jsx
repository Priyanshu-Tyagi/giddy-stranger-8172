import {
  Grid,
  GridItem,
  Text,
  Button,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ChooseAPlan() {
  return (
    <>
      <div>
        <Text fontSize="4xl" fontWeight="800" textAlign="center">
          Choose A Plan That Suits Your Needs
        </Text>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Grid width="90%" margin="auto" templateColumns="repeat(6,1fr)">
          <GridItem height="455px" border="1px solid #dedfe0" borderLeftRadius="12px">
            <div style={{ textAlign: "center", paddingTop: "2rem" }}>
              <Container>
                <Text fontSize="lg" fontWeight="700">
                  Free
                </Text>
              </Container>
              <Container
                display="flex"
                paddingTop=".6rem"
                justifyContent="center"
                gap="2px"
              >
                <Text fontSize="sm" fontWeight="700">
                  $
                </Text>
                <Text fontSize="4xl" fontWeight="700">
                  0
                </Text>
              </Container>
              <Container marginBottom=".8rem">
                <Text fontSize="lg" color="gray" fontWeight="300">
                  Forever
                </Text>
              </Container>
            </div>
            <div
              style={{
                padding: "1rem 1.5rem 0rem 1rem",
                height: "215px",
                backgroundColor: "#eaf2fe",
              }}
            >
              <Text fontSize="md" fontWeight="400">
                For new users who want to evaluate Mailtrap or intend to apply
                it on a personal side project.
              </Text>
            </div>
            <div>
              <Button
                marginLeft="25%"
                marginTop="1rem"
                backgroundColor="#1a2e44"
                color="white"
                _hover={{ bg: useColorModeValue("#578cc5") }}
              >
                Try Free
              </Button>
            </div>
          </GridItem>

          {/*  */}

          <GridItem height="455px" border="1px solid #dedfe0  ">
            <div style={{ textAlign: "center", paddingTop: "2rem" }}>
              <Container>
                <Text fontSize="lg" fontWeight="700">
                  Individual
                </Text>
              </Container>
              <Container
                display="flex"
                color="#51d273"
                paddingTop=".6rem"
                justifyContent="center"
                gap="2px"
              >
                <Text fontSize="sm" fontWeight="700">
                  $
                </Text>
                <Text fontSize="4xl" fontWeight="700">
                  9
                </Text>
                <Text fontSize="sm" fontWeight="700">
                  99
                </Text>
              </Container>
              <Container marginBottom=".8rem">
                <Text fontSize="lg" color="gray" fontWeight="300">
                  Monthly
                </Text>
              </Container>
            </div>
            <div
              style={{
                padding: "1rem 1.5rem 0rem 1rem",
                height: "215px",
                backgroundColor: "#f9f9f7",
              }}
            >
              <Text fontSize="md" fontWeight="400">
                For freelancers and individuals working in a one-person team,
                who want to benefit from higher email sending rate limits.
              </Text>
            </div>
            <div>
              <Button
                marginLeft="25%"
                marginTop="1rem"
                backgroundColor="#51d273"
                color="white"
                _hover={{ bg: useColorModeValue("#7ceb99") }}
              >
                Buy Now
              </Button>
            </div>
          </GridItem>

          {/*  */}

          <GridItem height="455px" border="1px solid #dedfe0  ">
            <div style={{ textAlign: "center", paddingTop: "2rem" }}>
              <Container>
                <Text fontSize="lg" fontWeight="700">
                  Team
                </Text>
              </Container>
              <Container
                display="flex"
                color="#51d273"
                paddingTop=".6rem"
                justifyContent="center"
                gap="2px"
              >
                <Text fontSize="sm" fontWeight="700">
                  $
                </Text>
                <Text fontSize="4xl" fontWeight="700">
                  24
                </Text>
                <Text fontSize="sm" fontWeight="700">
                  99
                </Text>
              </Container>
              <Container marginBottom=".8rem">
                <Text fontSize="lg" color="gray" fontWeight="300">
                  Monthly
                </Text>
              </Container>
            </div>
            <div
              style={{
                padding: "1rem 1.5rem 0rem 1rem",
                height: "215px",
                backgroundColor: "#f9f9f7",
              }}
            >
              <Text fontSize="md" fontWeight="400">
                For an established team where users may invite others to join
                their project, which has a moderate volume of emails to test.
              </Text>
            </div>
            <div>
              <Button
                marginLeft="25%"
                marginTop="1rem"
                backgroundColor="#51d273"
                color="white"
                _hover={{ bg: useColorModeValue("#7ceb99") }}
              >
                Buy Now
              </Button>
            </div>
          </GridItem>

          {/*  */}

          <GridItem
            height="510px"
            marginTop="-27.5px"
            border="1px solid #51d273"
            borderRadius="12px"
          >
            <div>
              <Container
                borderBottomRadius="8px"
                width="60%"
                margin="auto"
                padding="3px 8px"
                backgroundColor="#51d273"
              >
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  color="white"
                  textAlign="center"
                >
                  Recommended
                </Text>
              </Container>
            </div>
            <div style={{ textAlign: "center", paddingTop: "2rem" }}>
              <Container>
                <Text fontSize="lg" fontWeight="700">
                  Business
                </Text>
              </Container>
              <Container
                display="flex"
                color="#51d273"
                paddingTop=".6rem"
                justifyContent="center"
                gap="2px"
              >
                <Text fontSize="sm" fontWeight="700">
                  $
                </Text>
                <Text fontSize="4xl" fontWeight="700">
                  49
                </Text>
                <Text fontSize="sm" fontWeight="700">
                  99
                </Text>
              </Container>
              <Container marginBottom=".8rem">
                <Text fontSize="lg" color="gray" fontWeight="300">
                  Monthly
                </Text>
              </Container>
            </div>
            <div
              style={{
                padding: "1rem 1.5rem 0rem 1rem",
                height: "240px",
                backgroundColor: "#f9f9f7",
              }}
            >
              <Text fontSize="md" fontWeight="400">
                For companies with multiple tech teams working on several of
                their own or client projects that require higher rate limits,
                more emails, extra inboxes and a dedicated email address.
              </Text>
            </div>
            <div>
              <Button
                marginLeft="25%"
                marginTop="1rem"
                backgroundColor="#51d273"
                color="white"
                _hover={{ bg: useColorModeValue("#7ceb99") }}
              >
                Buy Now
              </Button>
            </div>
          </GridItem>

          {/*  */}

          <GridItem height="455px" border="1px solid #dedfe0  ">
            <div style={{ textAlign: "center", paddingTop: "2rem" }}>
              <Container>
                <Text fontSize="lg" fontWeight="700">
                  Premium
                </Text>
              </Container>
              <Container
                display="flex"
                color="#51d273"
                paddingTop=".6rem"
                justifyContent="center"
                gap="2px"
              >
                <Text fontSize="sm" fontWeight="700">
                  $
                </Text>
                <Text fontSize="4xl" fontWeight="700">
                  99
                </Text>
                <Text fontSize="sm" fontWeight="700">
                  99
                </Text>
              </Container>
              <Container marginBottom=".8rem">
                <Text fontSize="lg" color="gray" fontWeight="300">
                  Monthly
                </Text>
              </Container>
            </div>
            <div
              style={{
                padding: "1rem 1.5rem 0rem 1rem",
                height: "215px",
                backgroundColor: "#f9f9f7",
              }}
            >
              <Text fontSize="md" fontWeight="400">
                For large organizations looking for a reliable system to handle
                large-scale email testing backed up by prime limits and rich
                collaboration possibilities.
              </Text>
            </div>
            <div>
              <Button
                marginLeft="25%"
                marginTop="1rem"
                backgroundColor="#51d273"
                color="white"
                _hover={{ bg: useColorModeValue("#7ceb99") }}
              >
                Buy Now
              </Button>
            </div>
          </GridItem>

          {/*  */}

          <GridItem height="455px" border="1px solid #dedfe0" borderRightRadius="12px">
            <div style={{ textAlign: "center", paddingTop: "2rem" }}>
              <Container>
                <Text fontSize="lg" fontWeight="700">
                  Enterprise
                </Text>
              </Container>
              <Container
                display="flex"
                color="#51d273"
                paddingTop=".6rem"
                justifyContent="center"
                gap="2px"
              >
                <Text fontSize="sm" fontWeight="700">
                  $
                </Text>
                <Text fontSize="4xl" fontWeight="700">
                  299
                </Text>
                <Text fontSize="sm" fontWeight="700">
                  99
                </Text>
              </Container>
              <Container marginBottom=".8rem">
                <Text fontSize="lg" color="gray" fontWeight="300">
                  Monthly
                </Text>
              </Container>
            </div>
            <div
              style={{
                padding: "1rem 1.5rem 0rem 1rem",
                height: "215px",
                backgroundColor: "#f9f9f7",
              }}
            >
              <Text fontSize="md" fontWeight="400">
                For clients who are capable of challenging Mailtrap by loading
                it with email testing from both development and staging
                environments with virtually no limits.
              </Text>
            </div>
            <div>
              <Button
                marginLeft="25%"
                marginTop="1rem"
                backgroundColor="#51d273"
                color="white"
                _hover={{ bg: useColorModeValue("#7ceb99") }}
              >
                Buy Now
              </Button>
            </div>
          </GridItem>
        </Grid>
      </div>
    </>
  );
}
