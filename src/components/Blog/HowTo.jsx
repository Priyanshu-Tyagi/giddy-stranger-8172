import {
  Text,
  Icon,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

export default function HowTo() {
  function clock() {
    return <Icon as={TimeIcon} />;
  }

  return (
    <div>
      <div style={{ width: "85%", margin: "auto" }}>
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
        <div>
          <img
            src="https://mailtrap.io/wp-content/uploads/2022/06/HTML5-video-in-emails_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-9-1536x798.png"
            alt="951"
          />
        </div>
      </div>
    </div>
  );
}
