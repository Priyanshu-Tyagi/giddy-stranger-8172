import { Text, Stack } from "@chakra-ui/react";

export default function Setup() {
  // const url="https://mailtrap.io/wp-content/uploads/2021/03/setup-final-480x345.png";
  return (
    <div style={{ width: "75%", margin: "auto" }}>
      <div>
        <Text fontSize="4xl" fontWeight="800" textAlign="center">
          Setup takes less than 5 minutes
        </Text>
        <br />
        <Text fontSize="sm" fontWeight="400" textAlign="center">
          Mailtrap is compatible with any app or framework that supports SMTP
        </Text>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img src="https://mailtrap.io/wp-content/uploads/2021/03/setup-final-480x345.png" />
        </div>
        <div style={{ width: "50%" }}>
          <Stack>
            <br />
            {/* https://drive.google.com/file/d/1sSjv-Lzb9mUdEPu7huaxB2NMWzG3pIaZ/view?usp=sharing */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <img src="https://drive.google.com/uc?export=view&id=1sSjv-Lzb9mUdEPu7huaxB2NMWzG3pIaZ" />
              <Text fontSize="lg" fontWeight="800" paddingRight="2rem">
                Select your integration from 20+ code samples or copy SMTP
                credentials
              </Text>
            </div>
            <br />
            {/* https://drive.google.com/file/d/19ek9H9ChqpU-CQA5uO1tKJD-LC9MrxlF/view?usp=sharing */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <img src="https://drive.google.com/uc?export=view&id=19ek9H9ChqpU-CQA5uO1tKJD-LC9MrxlF" />
              <Text fontSize="lg" fontWeight="800" paddingRight="2rem">
                Paste the configuration to your project
              </Text>
            </div>
            <br />
            {/* https://drive.google.com/file/d/1DO-WHSreg_PbTG6dz_8ORndetNaORhvp/view?usp=sharing */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <img src="https://drive.google.com/uc?export=view&id=1DO-WHSreg_PbTG6dz_8ORndetNaORhvp" />
              <Text
                fontSize="lg"
                fontWeight="800"
                paddingLeft="5px"
                paddingRight="2rem"
              >
                {" "}
                Run your email sending code
              </Text>
            </div>
            <br />
            {/* https://drive.google.com/file/d/1LlN10jrmgOIFBtBr5bE4zdYLWKWq2d3V/view?usp=sharing */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <img src="https://drive.google.com/uc?export=view&id=1LlN10jrmgOIFBtBr5bE4zdYLWKWq2d3V" />
              <Text fontSize="lg" fontWeight="800" paddingRight="2rem">
                Instantly receive a message in your Mailtrap inbox
              </Text>
            </div>
            <br />
          </Stack>
        </div>
      </div>
    </div>
  );
}
