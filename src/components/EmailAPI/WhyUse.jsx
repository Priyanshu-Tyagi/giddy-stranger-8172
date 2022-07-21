import { Container, Text } from "@chakra-ui/react";

export default function WhyUse() {
  return (
    <div>
      <div>
        <Text fontSize="4xl" textAlign="center" fontWeight="800">
          Why Use Mailtrap for Email Delivery
        </Text>
      </div>
      <div>
        <div style={{ display: "flex", width: "75%", margin: "auto" }}>
          <div
            style={{ width: "55%", paddingTop: "8rem", paddingRight: "2rem" }}
          >
            <Text fontSize="4xl" fontWeight="800">
              Deliverability Monitoring
            </Text>
            <br />
            <Text fontSize="lg" fontWeight="500">
              Monitor your deliverability as you do with Infrastructure. Don’t
              be too late to respond to deliverability issues. With Mailtrap’s
              alerts you can be proactive and take action as soon as our system
              flags an issue with your emails.
            </Text>
          </div>
          <div style={{ width: "45%" }}>
            <img
              width="100%"
              src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-alerts.svg"
              alt="987"
            />
          </div>
        </div>
        <div style={{ display: "flex", width: "75%", margin: "auto" }}>
          <div style={{ width: "45%" }}>
            <img
              width="100%"
              src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-api-smtp.svg"
              alt="987"
            />
          </div>
          <div
            style={{ width: "55%", paddingTop: "8rem", paddingRight: "2rem" }}
          >
            <Text fontSize="4xl" fontWeight="800">
              SMTP and APIs Compatible with Sendgrid, Mailgun, Mandrill
            </Text>
            <br />
            <Text fontSize="lg" fontWeight="500">
              We support standard SMTP protocol and have compatible APIs. This
              saves time and makes the switch to Mailtrap easier.
            </Text>
          </div>
        </div>

        <div style={{ display: "flex", width: "75%", margin: "auto" }}>
          <div
            style={{ width: "55%", paddingTop: "8rem", paddingRight: "2rem" }}
          >
            <Text fontSize="4xl" fontWeight="800">
              60 Days of Detailed Logs
            </Text>
            <br />
            <Text fontSize="lg" fontWeight="500">
              Within 60 days you get access to all messages history. You can
              find the needed email, inspect it, troubleshoot and debug.
            </Text>
          </div>
          <div style={{ width: "45%" }}>
            <img
              width="100%"
              src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-email-logs.svg"
              alt="987"
            />
          </div>
        </div>
        <div style={{ display: "flex", width: "75%", margin: "auto" }}>
          <div style={{ width: "45%" }}>
            <img
              width="100%"
              src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-setup.svg"
              alt="987"
            />
          </div>
          <div
            style={{ width: "55%", paddingTop: "8rem", paddingRight: "2rem" }}
          >
            <Text fontSize="4xl" fontWeight="800">
              Secure and User-Friendly Setup
            </Text>
            <br />
            <Text fontSize="lg" fontWeight="500">
              We help you get all the necessary DNS records to ensure great
              deliverability. We also rotate your DKIM keys to provide another
              layer of security. Follow the step-by-step wizard to complete the
              setup in a few minutes.
            </Text>
          </div>
        </div>

        <div style={{ display: "flex", width: "75%", margin: "auto" }}>
          <div
            style={{ width: "55%", paddingTop: "8rem", paddingRight: "2rem" }}
          >
            <Text fontSize="4xl" fontWeight="800">
              Single Screen Email Stats
            </Text>
            <br />
            <Text fontSize="lg" fontWeight="500">
              A quick look at the dashboard gives your team insight into the
              critical metrics. When necessary, dig deeper to improve your email
              perfomance.
            </Text>
          </div>
          <div style={{ width: "45%" }}>
            <img
              width="100%"
              src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-single-screen-analytics.svg"
              alt="987"
            />
          </div>
        </div>
        <div style={{ display: "flex", width: "75%", margin: "auto" }}>
          <div style={{ width: "45%" }}>
            <img
              width="100%"
              src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-all-in-one.svg"
              alt="987"
            />
          </div>
          <div
            style={{ width: "55%", paddingTop: "8rem", paddingRight: "2rem" }}
          >
            <Text fontSize="4xl" fontWeight="800">
              Test, Send, Monitor Emails in One Place
            </Text>
            <br />
            <Text fontSize="lg" fontWeight="500">
              No need to log into a few systems and to manage billing for all of
              them. Complete email development cycle – test and send your emails
              within one solution.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
