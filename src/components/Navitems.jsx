import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export function E1() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src="https://mailtrap.io/wp-content/uploads/2021/06/qa_automation_icon_menu.svg" />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Text fontSize="md" fontWeight="900">
          QA Automation
        </Text>
        <Text fontSize="sm" fontWeight="500">
          Automation for Email Testing
        </Text>
      </div>
    </div>
  );
}
export function E2() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src="https://mailtrap.io/wp-content/uploads/2021/06/check_html_icon_menu.svg" />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Text fontSize="md" fontWeight="900">
          HTML Check
        </Text>
        <Text fontSize="sm" fontWeight="500">
          Find HTML/CSS issues
        </Text>
      </div>
    </div>
  );
}
export function E3() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src="https://mailtrap.io/wp-content/uploads/2021/06/fake_smtp_server_icon_menu.svg" />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Text fontSize="md" fontWeight="900">
          Fake SMTP Server
        </Text>
        <Text fontSize="sm" fontWeight="500">
          Your own SMTP server
        </Text>
      </div>
    </div>
  );
}
export function E4() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src="https://mailtrap.io/wp-content/uploads/2021/06/api_icon_menu.svg" />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Text fontSize="md" fontWeight="900">
          Mailtrap API
        </Text>
        <Text fontSize="sm" fontWeight="500">
          Integrate with your application
        </Text>
      </div>
    </div>
  );
}

//   ITEMS FOR RESOURES

export function R1() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          width="40px"
          src="https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-09.svg"
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Text fontSize="md" fontWeight="900">
          API
        </Text>
        <Text fontSize="sm" fontWeight="500">
          Integrate with existing resources
        </Text>
      </div>
    </div>
  );
}
export function R2() {
  return (
    <NavLink to="/case-studies">
      <div style={{ display: "flex" }}>
        <div>
          <img
            width="40px"
            src="https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-08.svg"
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Text fontSize="md" fontWeight="900">
            Case Studies
          </Text>
          <Text fontSize="sm" fontWeight="500">
            Success stories of our customers
          </Text>
        </div>
      </div>
    </NavLink>
  );
}
export function R3() {
  return (
    <NavLink to="/blog">
      <div style={{ display: "flex" }}>
        <div>
          <img
            width="40px"
            src="https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-07.svg"
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Text fontSize="md" fontWeight="900">
            Blog
          </Text>
          <Text fontSize="sm" fontWeight="500">
            The best content about emails
          </Text>
        </div>
      </div>
    </NavLink>
  );
}
export function R4() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          width="40px"
          src="https://mailtrap.io/wp-content/uploads/2022/03/Transactional-Email-Sending_icon-06.svg"
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Text fontSize="md" fontWeight="900">
          Help
        </Text>
        <Text fontSize="sm" fontWeight="500">
          How-to's and Knowledge base
        </Text>
      </div>
    </div>
  );
}
