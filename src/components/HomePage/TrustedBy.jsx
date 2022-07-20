import { Text } from "@chakra-ui/react";
import "../styles/HomePage.css";

export default function TrustedBy() {
  return (
    <div>
      <Text fontSize="4xl" fontWeight="800" textAlign="center">
        Trusted by over 900,000 devs, QAs, and
      </Text>
      <Text fontSize="4xl" fontWeight="800" lineHeight="5" textAlign="center">
        managers worldwide
      </Text>
      <br />
      <br />
      <br />
      <br />
      <div className="trustedbyimgdiv">
        <img
          className="trustedbyimg"
          src="https://mailtrap.io/wp-content/uploads/2021/04/Adobe.svg"
          alt=""
        />
        <img
          className="trustedbyimg"
          src="https://mailtrap.io/wp-content/uploads/2021/04/Atlassian.svg"
          alt=""
        />
        <img
          className="trustedbyimg"
          src="https://mailtrap.io/wp-content/uploads/2021/04/Calendly.svg"
          alt=""
        />
        <img
          className="trustedbyimg"
          src="https://mailtrap.io/wp-content/uploads/2021/04/Yelp.svg"
          alt=""
        />
        <img
          className="trustedbyimg"
          src="https://mailtrap.io/wp-content/uploads/2021/04/UserTesting.svg"
          alt=""
        />
      </div>
    </div>
  );
}
