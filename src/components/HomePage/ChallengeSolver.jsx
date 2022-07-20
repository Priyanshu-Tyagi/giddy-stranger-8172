import { Text } from "@chakra-ui/react";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

export default function Challenge() {
  return (
    <div style={{width:"75%",margin:"auto"}}>
      <div>
        <Text fontSize="4xl" fontWeight="800" textAlign="center">
          Email testing challenges that
        </Text>
        <Text fontSize="4xl" fontWeight="800" lineHeight="7" textAlign="center">
          Mailtrap solves
        </Text>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <Grid templateColumns="repeat(2, 1fr)" >
          <GridItem>
            <Stack>
              <div style={{ display: "flex", marginBottom:"2rem", padding:"0px 1rem" }}>
                <div style={{marginRight:"1rem"}}>
                  <img
                    width="150px"
                    src="https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg" />
                </div>
                <div>
                <Text fontSize="lg" fontWeight="800">Configure your testing environment in 5 minutes</Text>
                <Text lineHeight="3" ><br/></Text>
                <Text fontSize="sm" fontWeight="400">Each Mailtrap account comes with an individual testing environment. Integrate it with your app in just a few clicks.</Text>
                </div>
              </div>

              <div style={{ display: "flex", marginBottom:"2rem", padding:"0px 1rem" }}>
                <div style={{marginRight:"1rem"}}>
                  <img
                    width="150px"
                    src="https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg" />
                </div>
                <div>
                <Text fontSize="lg" fontWeight="800">Quickly integrate with Mailtrap API</Text>
                <Text lineHeight="3" ><br/></Text>
                <Text fontSize="sm" fontWeight="400">Get started quickly with our well-documented API and configure automated testing with unlimited API calls.</Text>
                </div>
              </div>

              <div style={{ display: "flex", marginBottom:"2rem", padding:"0px 1rem" }}>
                <div style={{marginRight:"1rem"}}>
                  <img
                    width="150px"
                    src="https://mailtrap.io/wp-content/uploads/2021/01/icon_men.svg" />
                </div>
                <div>
                <Text fontSize="lg" fontWeight="800">Easily share test emails with your team</Text>
                <Text lineHeight="3" ><br/></Text>
                <Text fontSize="sm" fontWeight="400">Manage access to your inboxes for colleagues or clients. Send selected test emails to whitelisted real recipients.</Text>
                </div>
              </div>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack>
              <div style={{ display: "flex", marginBottom:"2rem", padding:"0px 1rem" }}>
                <div style={{marginRight:"1rem"}}>
                  <img
                    width="150px"
                    src="https://mailtrap.io/wp-content/uploads/2021/03/icon__mail.svg" />
                </div>
                <div>
                <Text fontSize="lg" fontWeight="800">Keep all testing data organized in one place</Text>
                <Text lineHeight="3" ><br/></Text>
                <Text fontSize="sm" fontWeight="400">Create individual inboxes for different environments or review servers and group them into relevant projects.</Text>
                </div>
              </div>

              <div style={{ display: "flex", marginBottom:"2rem", padding:"0px 1rem" }}>
                <div style={{marginRight:"1rem"}}>
                  <img
                    width="150px"
                    src="https://mailtrap.io/wp-content/uploads/2021/03/icon2.svg" />
                </div>
                <div>
                <Text fontSize="lg" fontWeight="800">Dig into both the content and source of your emails</Text>
                <Text lineHeight="3" ><br/></Text>
                <Text fontSize="sm" fontWeight="400">View messages, check spam scores, validate headers, analyze the HTML support across email clients, and more.</Text>
                </div>
              </div>

              <div style={{ display: "flex", marginBottom:"2rem", padding:"0px 1rem" }}>
                <div style={{marginRight:"1rem"}}>
                  <img
                    width="150px"
                    src="https://mailtrap.io/wp-content/uploads/2021/03/ivon__performance.svg" />
                </div>
                <div>
                <Text fontSize="lg" fontWeight="800">Test your email sending service</Text>
                <Text lineHeight="3" ><br/></Text>
                <Text fontSize="sm" fontWeight="400">Send emails to Mailtrap directly from your CRM or email sending service. Simulate sending to multiple recipients.</Text>
                </div>
              </div>
            </Stack>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}
