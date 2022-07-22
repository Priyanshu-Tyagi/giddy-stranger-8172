import { Text } from "@chakra-ui/react";

export default function CaseIntro() {
  return (
    <div style={{backgroundColor:"#f9f9f7"}}>
        <br/>
        <br/>
        <br/>
      <div>
        <Text fontSize="5xl" textAlign="center" fontWeight="800">
          Mailtrap Customer Stories
        </Text>
        <br />
        <Text fontSize="lg" textAlign="center" fontWeight="600">
          Read successful stories of Mailtrap customers that
        </Text>
        <Text fontSize="lg" textAlign="center" lineHeight="4" fontWeight="600">
          automated email testing with no hassle.
        </Text>
      </div>
      <br/>
      <br/>
      <div>
        <div style={{width:"45%", margin:"auto"}}>
          <img
            width="100%"
            src="https://mailtrap.io/wp-content/uploads/2021/05/img__case-study.svg"
            alt="654"
          />
        </div>
      </div>
    </div>
  );
}
